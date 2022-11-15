import { FirebaseMessaging } from "@capacitor-firebase/messaging";
import { Capacitor } from "@capacitor/core";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "./firebaseConfig";


export interface credenciales {
  email: string,
  password: string,
}

export const regDispositivo = async () => {
  try {
    if (Capacitor.isNativePlatform()) {
      const result = await FirebaseMessaging.getToken({
        vapidKey:
          "BMNkMpusHkdcNepNEUir540IJBSpsHSoqs_voXuZ5n7oPPmGJyiipW1oBqINrLuioxvUz2p01WFEkxjXrnehPJ4",
      });
      return result;
    } else {
      const result = await FirebaseMessaging.getToken();
      return result;
    }
  } catch (error) {
    console.log("ha habido un error", error);
  }
};

export const crearObjeto = async (objeto: any) => {
  const colRef = collection(db, "items");
  const data = await addDoc(colRef, objeto);
  return data.id;
};

export const updateObjeto = async (id: any, objeto: any) => {
  //TODO cambiar nombre a cliente
  const colRef = collection(db, "usuario");
  await updateDoc(doc(colRef, id), objeto);
};

// export const loginWithEmailPassword = async (credenciales: {email: string; password: string}) => {
export const loginWithEmailPassword = async ({email, password}:credenciales) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email!, password!);
    console.log(result.user.uid)
    return result.user.uid;
  } catch (error) {
    console.log("error al logears: " , error)
  }
};

export const registerUser = async ({email, password}:credenciales) => {
try {
  const reg = await createUserWithEmailAndPassword(auth, email!, password!);
  const uid = reg.user.uid;
  return (uid)
}catch (error){
  console.log("error al crear la cuenta: " , error)
}
};
