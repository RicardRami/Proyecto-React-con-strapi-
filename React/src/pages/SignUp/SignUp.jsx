import { Alert, Button, Card, Col, Form, Input, message, Row, Spin, Typography,Radio} from "antd";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useScreenSize from "../../hooks/useScreenSize";
import { API } from "../../constant";
import { setToken } from "../../helpers";
import ima1 from "./icons/zorro.jpeg"
import ima2 from "./icons/pollo.jpeg"
import ima3 from "./icons/cora.jpeg"
import ima4 from "./icons/cerdo.jpeg"
import ima5 from "./icons/perro.jpeg"

const SignUp = () => {
  const { isDesktopView } = useScreenSize();
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Bienvenido a Binnie ${data.user.username}!`);

        navigate("/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Algo salio mal!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Fragment>
      <Row align="middle">
        <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
          <Card title="SignUp">
            {error ? (
              <Alert
                className="alert_error"
                message={error}
                type="error"
                closable
                afterClose={() => setError("")}
              />
            ) : null}
            <Form
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre:"
                name="username"
                rules={[
                  {
                    required: true,
                    type: "string",
                  },
                ]}
              >
                <Input placeholder="Nombre" />
              </Form.Item>
              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="Correo" />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true }]}
              >
                <Input.Password placeholder="Contraseña" />
              </Form.Item>
              <Form.Item
               label="Imagen de Perfil"
                name="Perfil"
              rules={[
                {
                  required: true,
                  type: "Media",
                },
              ]}>
              <Radio value="perfil1" >
              <img src={ima1} alt="Opción 1" />
              </Radio>
              <Radio value="perfil2">
              <img src={ima2} alt="Opción 2" />
              </Radio>
              <Radio value="perfil3">
              <img src={ima3} alt="Opción 3" />
              </Radio>
              <Radio value="perfil4">
              <img src={ima4} alt="Opción 4" />
              </Radio>
              <Radio value="perfil5">
              <img src={ima5} alt="Opción 5" />
              </Radio>
        
              </Form.Item>  
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login_submit_btn"
                >
                  Submit {isLoading && <Spin size="small" />}
                </Button>
              </Form.Item>
            </Form>
            <Typography.Paragraph className="form_help_text">
              ¿Ya tienes una cuenta? <Link to="/signin">Entrar</Link>
              <p><a href='https://1drv.ms/b/s!Aj1BkQn9tMvGa_AHqaBnScJl0ZQ?e=ZwU6iu'>Revisa nuestros terminos y condiciones</a></p>
    
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignUp;
