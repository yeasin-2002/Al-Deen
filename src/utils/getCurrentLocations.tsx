"use client";
import { SetStateAction, useEffect, useState } from "react";

export const useLatitudeAndLongitude = () => {
  const [latitude, setLatitude] = useState<SetStateAction<number>>();
  const [longitude, setLongitude] =
    useState<SetStateAction<undefined | number>>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    } else {
      setLatitude(undefined);
      setLongitude(undefined);
    }
  }, []);

  return { latitude, longitude };
};
