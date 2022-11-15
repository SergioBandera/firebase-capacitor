import { useEffect, useState } from "react";
import { Geolocation, Position } from "@capacitor/geolocation";

export const useGetCurrentPosition = () => {
  const [cordenadas, setCordenadas] = useState<Position>();

  const obtenerPosicionActual = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setCordenadas(coordinates);
  };

  useEffect(() => {
    obtenerPosicionActual();
  }, []);

  return cordenadas;
};
