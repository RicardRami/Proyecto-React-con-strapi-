import React from "react";
import { Button, Card, Col, Form, Input, message, Row, Spin, Radio} from "antd";
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { useState } from "react";
import { getToken } from "../../helpers";
import ima1 from "./icons/zorro.jpeg"
import ima2 from "./icons/pollo.jpeg"
import ima3 from "./icons/cora.jpeg"
import ima4 from "./icons/cerdo.jpeg"
import ima5 from "./icons/perro.jpeg"

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  

  const handleProfileUpdate = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // set the auth token to the user's jwt
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();

      setUser(responseData);
      message.success("Datos actualizados!");
    } catch (error) {
      console.error(Error);
      message.error("Error While Updating the Profile!");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Card className="profile_page_card">
      <Form
        layout="vertical"
        initialValues={{
          username: user?.username,
          email: user?.email,
          about: user?.about,
          perfil:user?.perfil?ima1:ima5,
        }}
        onFinish={handleProfileUpdate}
      >
        <Row gutter={[16, 16]}>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Nombre"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Username is required!",
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </Col>
          <Col md={8} lg={8} sm={24} xs={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Cuentanos algo de ti"
              name="about"
              rules={[
                {
                  required: true,
                  type: "string",
                  max: 120,
                },
              ]}
            >
              <Input.TextArea placeholder="About" rows={6} />
            </Form.Item>
          </Col>
          <Col>
          <Form.Item name="perfil">
          <Radio.Group>
        <Radio value="perfil1">
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
         </Radio.Group>
         </Form.Item>
          </Col>
        </Row>
        <Button
          className="profile_save_btn"
          htmlType="submit"
          type="primary"
          size="large"
        >
          {loading ? (
            <>
              <Spin size="small" /> Saving
            </>
          ) : (
            "Save"
          )}
        </Button>
      </Form>
    </Card>
  );
};

export default Profile;
