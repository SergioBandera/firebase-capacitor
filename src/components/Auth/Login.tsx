import React, { useState } from "react";

import { doLogin, getLogin } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/useReduxHook";

export const Login = () => {
  const dispatch = useAppDispatch();
  const [datosUsuario, setDatosUsuario] = useState({
      email: "",
      password:"",
    });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
       dispatch(getLogin(datosUsuario));

    // const datos = await loginWithEmailPassword(datosUsuario);
    // console.log("este si", datos?.uid);
  };

  return (
    <div>
      <h2>Logeate con tu Usuario</h2>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="correo electronico"
          name="email"
          onChange={onChangeInput}
        />
        <input
          type="password"
          placeholder="contraseña"
          name="password"
          onChange={onChangeInput}
        />
        <button type="submit">Login in</button>
      </form>
    </div>
  );
};
