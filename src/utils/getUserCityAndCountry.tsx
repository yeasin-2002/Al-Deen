"use client";

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
import { GioLocationResponse } from "@/interface/geoLocation.interface";
import { SetStateAction, useEffect, useState } from "react";
import { publicEnv } from "./exportEnv";

interface getUserCityAndCountryProps {
  longitude: SetStateAction<number | undefined>;
  latitude: SetStateAction<number> | undefined;
}

export const useUserCityAndCountry = ({
  latitude,
  longitude,
}: getUserCityAndCountryProps) => {
  const [data, setData] = useState<GioLocationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${publicEnv.openCageKey}`;

      const response = await fetch(url);
      const result = (await response.json()) as GioLocationResponse;

      setData(result);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [latitude, longitude]);

  return { data, isLoading, isError };
};
