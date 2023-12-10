import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ShowPrayerTimeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ShowPrayerTime: FC<ShowPrayerTimeProps> = ({ ...rest }) => {
  return <div {...rest}>ShowPrayerTime</div>;
};
