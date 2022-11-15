import { useAppSelector } from '../redux/useReduxHook';

export const LoggedUser = () => {

    const datosStore = useAppSelector((store) => store);

    
    
  return (
    <div>
        <h2>te has logeado!</h2>
        <p>uid: {datosStore.authSlice.userData.uid}</p>
        <p>email: {datosStore.authSlice.userData.email}</p>
    </div>
  )
}
