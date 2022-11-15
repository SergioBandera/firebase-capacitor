import React, {  useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/useReduxHook";

export const PruebasRedux = () => {
  //selector nos da el estado del store de redux
  const datos = useAppSelector((store) => store);
  const [datosUsuario, setDatosUsuario] = useState({
    email: "",
    password:"",
    user: "",
  });
  //dispatch sirve para poder utilizar las funciones guardadas en el slice(antiguo reducer)
  const dispatch = useAppDispatch();
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (datosUsuario.password !== "" && datosUsuario.email !== "") {
      // dispatch(login(datosUsuario));
      setDatosUsuario({ user: "", email: "", password:"" });
    }
    else console.log("faltan datos")
  };

  return (
    <div>
      <h2>Pruebas de redux</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="password"
          type="password"
          name="password"
          value={datosUsuario.password}
          onChange={onChangeInput}
        />
        <input
          placeholder="email"
          name="email"
          value={datosUsuario.email}
          onChange={onChangeInput}
        />
        <button type="submit">subir a redux</button>
      </form>
      {/* <p>usuario de redux: {datos.userData.email}</p>
      <p>correo de redux: {datos.userData.user}</p> */}
    </div>
  );
};
