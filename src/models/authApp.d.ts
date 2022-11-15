import { UserData } from "./userData";



export interface AuthApp{
    isLoading: boolean,
    isLogged: boolean,
    loginEnable: boolean,
    userData: UserData,
}