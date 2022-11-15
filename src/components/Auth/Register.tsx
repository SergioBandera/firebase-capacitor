import React, { useState } from "react";
import { UserData } from "../../models/userData";
import { doRegisterUser } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/useReduxHook";

export const Register = () => {
  const initialState = {
    email: "",
    uid:"",
  };

  const dispatch = useAppDispatch();
  const [datosUsuario, setDatosUsuario] = useState<UserData>(initialState);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatosUsuario({ ...datosUsuario, [name]: value });
  };
   const doRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(doRegisterUser(datosUsuario));

  };

  return (
    <div>
      <h2>Registra tu Usuario</h2>
      <form onSubmit={doRegister}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
