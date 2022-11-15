import { useState } from "react";
import { useGetCurrentPosition } from "../capacitor/capacitorGeolocalizacion";
import { Position } from "@capacitor/geolocation";
import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { useAppDispatch, useAppSelector } from "../redux/useReduxHook";
import { loginEnable } from "../redux/authSlice";
import { LoggedUser } from "./loggedUser";
import { env } from "process";

export const Home = () => {
  const datosActualizados = useAppSelector((store) => store);
  const dispatch = useAppDispatch();
  // const cords = useGetCurrentPosition();
  const [coordenadas, setCoordenadas] = useState<Position>();

  const mostrarCoordenadas = () => {
    return (
      <>
        <p>Latitude: {coordenadas?.coords.latitude} </p>
        <p>Acuracy: {coordenadas?.coords.accuracy} </p>
        <p>Longitude: {coordenadas?.coords.longitude} </p>
      </>
    );
  };

  const mostrarLoginORegistro = ()=>{
    if (datosActualizados.authSlice.loginEnable){
      return <div>
      <Login />
      <button onClick={() => dispatch(loginEnable())}>
        Create account
      </button>
      <p>AQUIIIIIIIIIIIIIIIIII</p>
    </div>
    }else {
      return (<div>
      <Register />
      <button onClick={() => dispatch(loginEnable())}>
        Click here to Login In with ur account
      </button>
    </div>)
    }
  }
  const pruebaFinger = () =>{
    
  }
  
  
  return (
    <>
      {datosActualizados.authSlice.isLogged === true ? (
        <LoggedUser />
      ) : (
        <p>no estas logeado</p>
        )}
      {mostrarLoginORegistro()}

      {/* <button onClick={() => setCoordenadas(cords)}> */}
        Pulsa para saber la latitud
      {/* </button> */}
      {coordenadas ? mostrarCoordenadas() : "no hay datos en las coordenadas"}
    </>
  );
};
