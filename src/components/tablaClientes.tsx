import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

export const TablaClientes = () => {
    
    const [datos, setDatos] = useState<any>([]);
    const productos = collection(db, "usuario");

    useEffect(() => {
        getUsuarios();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const getUsuarios = async () => {
        const data = await getDocs(productos);
        setDatos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };


    const mostrarDatos = () => {
        return datos.map((user: any, indice: number) => {
          return (
            
            <div key={user.id} className="list-container">
              <li>Indice del array: {indice}</li>
              <li>ID: {user.id}</li>
              <li>Nombre: {user.nombre}</li>
              <li>Edad: {user.edad}</li>
            </div>
          );
        });
      };
  return (
    <div className="div-container">
      <h2>Datos de Firebase 2</h2>
      {mostrarDatos()}
    </div>
  );
};
