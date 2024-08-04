import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { getToken } from "./helpers";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Menu from "./components/menu/menu";
import DaysInMonth from './components/actividades/Dias/calendario';
import Tik from './components/Recordatorio/momentos';
import Contacto from "./components/contacto/Contacto";
import Inicio from "./components/inicio/Inicio"
import Flor from "./components/relajacion/relajacion";
import UploadImage from "./components/subida/subida"
import Frases from "./components/frases/frase";
import MyForm from "./components/P/prueba";
import Juego from "./components/relajacion/Juego"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/subida' element={<UploadImage/>}/>
      <Route path='/inicio' element={<Inicio/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/frases' element={<Frases/>}/>
      <Route path='/juego' element={<Juego/>}/>
      <Route path='/momentos' element={<Tik/>}/>
      <Route path='/prueba' element={<MyForm/>}/>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/Dias' element={<DaysInMonth/>}/>
      <Route path='/Flor' element={<Flor/>}/>
      <Route path="/profile" element={getToken() ? <Profile /> : <Navigate to="/signin" />}/>
    </Routes>
  );
};

export default AppRoutes;
