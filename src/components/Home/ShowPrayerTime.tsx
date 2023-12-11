"use client";
import { useQuery } from "@tanstack/react-query";
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react";

import { prayerTimeResponse } from "@/interface";
import { convert12HourDateFormat, useLatitudeAndLongitude } from "@/utils";

import fazarIcon from "@/assets/Ilastrations/moon-star.png";
import sunCloud from "@/assets/Ilastrations/sun-cloud.svg";
import sun from "@/assets/Ilastrations/sunIcon.svg";
import sunrise from "@/assets/Ilastrations/sunrise.svg";
import sunset from "@/assets/Ilastrations/sunset.svg";

import Image from "next/image";

interface ShowPrayerTimeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowPrayerTime: FC<ShowPrayerTimeProps> = ({ ...rest }) => {
  const { latitude, longitude } = useLatitudeAndLongitude();
  const date = new Date();
  const fullDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["prayerTime", { latitude, longitude }],
    queryFn: async () => {
      const url = `http://api.aladhan.com/v1/timings/${fullDate}?latitude=${latitude}&longitude=${longitude}&method=2`;
      const response = await fetch(url);
      const data = (await response.json()) as prayerTimeResponse;
      return data;
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  const prayerTimeItem = [
    {
      name: "Fajr",
      time: data?.data?.timings?.Fajr,
      icon: sunrise,
    },
    {
      name: "Dhuhr",
      time: data?.data?.timings?.Dhuhr,
      icon: sun,
    },
    {
      name: "Asr",
      time: data?.data?.timings?.Asr,
      icon: sunCloud,
    },
    {
      name: "Maghrib",
      time: data?.data?.timings?.Maghrib,
      icon: sunset,
    },
    {
      name: "Isha",
      time: data?.data?.timings?.Isha,
      icon: fazarIcon,
    },
  ];

  const loadingComponents = <div>Loading</div>;
  const ErrorComponents = <div>Error</div>;
  const mainComponents = (
    <Fragment>
      {data?.status === "OK" && (
        <div className="grid place-items-center ">
          <div className="text-center">
            <p>
              {data?.data?.date?.gregorian?.weekday?.en},
              {data?.data?.date?.gregorian?.day}{" "}
              {data?.data?.date?.gregorian?.month?.en}{" "}
              {data?.data?.date?.gregorian?.year}
            </p>
            <p>
              {data.data.date.hijri.weekday.en} (
              {data.data.date.hijri.weekday.ar}) , {data.data.date.hijri.day}{" "}
              {data.data.date.hijri.month.en} ( {data.data.date.hijri.month.ar}){" "}
              {data.data.date.hijri.year}
            </p>
          </div>

          <div className="flex gap-x-3 my-6">
            {prayerTimeItem.map((item) => {
              const time = convert12HourDateFormat(item.time);
              return (
                <div
                  key={item.name + item.time}
                  className=" shadow-xl mx-auto text-center  space-y-2 bg-green-100 hover:bg-green-200 transition-all duration-300 px-12 py-8 rounded-t-full "
                >
                  <Image
                    width={50}
                    height={50}
                    src={item.icon}
                    alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>{time}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Fragment>
  );

  return (
    <div {...rest}>
      <div className="flex flex-col  items-center ">
        <h2 className="my-5 font-bold text-xl text-gray-600">
          Todays Prayer Times
        </h2>
      </div>
      <div>
        {isError
          ? ErrorComponents
          : isLoading
            ? loadingComponents
            : mainComponents}
      </div>
    </div>
  );
};
