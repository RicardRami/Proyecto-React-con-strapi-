import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../../helpers";
import './estilo.css';
import image1 from '../imagenes/binnie.png';

const AppHeader = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };

  return (
    <Space className="header_space">
      <Button className="header_space_brand" href="/" type="link">
      <img src={image1} alt="Texto alternativo" width={50} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
            <Button className="auth_button_signUp" type="primary" href="/inicio">
              Inicio
            </Button>
            <Button className="auth_button_signUp" type="primary" href="/Dias">
              Actividad
            </Button>
            <Button className="auth_button_signUp" type="primary" href="/contacto">
              Contacto
            </Button>
            <Button className="auth_button_signUp" type="primary" onClick={handleLogout}>
              Cerrar Sesion
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/signin" type="link">
              Iniciar Sesion
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              Registrarse
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;
