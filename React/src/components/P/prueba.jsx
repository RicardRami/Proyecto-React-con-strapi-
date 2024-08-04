import React, { useState } from 'react';
import { Form, Button, message, Upload, Spin } from 'antd';
import { useAuthContext } from "../../context/AuthContext";
import { API } from "../../constant";
import { getToken } from "../../helpers";
import { Link } from 'react-router-dom';

const MyForm = () => {
  const [setFile, error] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
 
  const imageBase64 = 'image'; // Obtén la imagen base64 de alguna manera
  localStorage.setItem('myImage', imageBase64);  

  const handleSubmit = async (image) => {
    
    setLoading(true);
    try {

      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch(`${API}/upload/`, {
      method: "POST",
      headers: {
      Authorization: `Bearer ${getToken()}`,
      },
       body: formData,
      });

      const responseData = await response.json();

      setUser(responseData);
      message.success("Imagen Subida!");
    } catch (error) {
      console.error(Error);
      message.error("Error al subir la imagen!");
    } finally {
      setLoading(false);
    }
  };
  if (isLoading) {
    return <Spin size="large" />;
  }

  return (
    <div className="subir">
      <h1>Sube tu imagen:</h1>
      <Form
        layout="vertical"
        initialValues={{
          perfil:user?.perfil,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item label="Imagen"
        name="image"
        rules={[
          {
            required: true,
            message: "La imagen es requerida!",
          },
        ]}
      >
          <Upload
            accept=".jpg,.jpeg,.png"
            rules={[
              {
                required: true,
                message: "Imagen requerida!",
                type: "Media",
              },
            ]}
            
            beforeUpload={(file) => {
              const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
              if (!isJpgOrPng) {
                message.error('Solo se permiten archivos JPG o PNG!');
              }
              setFile(file);
              setPreview(URL.createObjectURL(file));
              return isJpgOrPng;
            }}
            onChange={(info) => {
              if (info.file.status === 'done') {
                message.success(`${info.file.name} uploaded successfully`);
              }
            }}
          >
            
            <Button>
              Seleccionar archivo
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Subir imagen
          </Button>
        </Form.Item>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{ width: '500px', marginTop: '20px', height: '400px' }}
          />
        )}
        {error && (
          <div style={{ color: 'ed' }}>
            {error}
          </div>
        )}
      </Form>
      <Link to="/frases">Ir a otra página</Link>
    </div>
    
  );
};

export default MyForm;