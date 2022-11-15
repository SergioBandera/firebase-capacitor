import { createSlice } from "@reduxjs/toolkit";
import { credenciales, loginWithEmailPassword, registerUser } from "../firebase/firebaseApi";
import { AuthApp } from "../models/authApp";
import { AppThunk } from "./store";

const initialState: AuthApp = {
  isLoading: false,
  loginEnable: true,
  isLogged: false,
  userData:{
    uid: "",
    email:"",
  }
};

export const authSlice = createSlice({
  name: "authApp",
  initialState: initialState,
  reducers: {
    //---->crear usuario
    doRegisterUser: (state, action) => {
      state.isLoading = true;
      try {
        registerUser(action.payload);
        registerSucces();
        state.isLoading=false;
      } catch (error) {
        console.log("no has podido crear el usuario: ", error);
        registerFailed();
        loginFailed();
      }
    },
    registerSucces: (state) => {
      state.isLoading = false;
    },
    registerFailed: (state) => {
      state.isLoading = false;
    },
    //---->logearse
    doLogin:  (state, action) => {
        state.userData.email= action.payload
        state.isLoading = true;
        state.isLogged = false;
        //  const uid = loginWithEmailPassword(action.payload)
        //  uid.then( userId=> state.userData.uid = userId) 
        //  state.userData.uid = uid; 
        //  state.userData.email = action.payload.email
  
    },
    loginSucess: (state, action) => {
        state.userData.uid = action.payload;
        state.isLogged = true;
        state.isLoading = false;
    },

    loginFailed: (state) => {
      state.isLoading = false;
      state.isLogged = false;
    },
    loginEnable: (state) => {
      state.loginEnable = !state.loginEnable;
    },
  },
});

export const getLogin = ({email, password}:credenciales) : AppThunk =>{
  return async (dispatch) =>{
    dispatch(doLogin(email));
    try {
      const response = await loginWithEmailPassword({email, password});
      dispatch(loginSucess(response))
      console.log("ha llegado al final " , response)
    } catch (error) {
      dispatch(loginFailed())
    }
  }

}

export const {
  doRegisterUser,
  registerSucces,
  loginSucess,
  doLogin,
  registerFailed,
  loginEnable,
  loginFailed,
} = authSlice.actions;

export default authSlice.reducer;
