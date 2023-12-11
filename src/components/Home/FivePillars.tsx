import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import quranIcon from "@/assets/Ilastrations/al-quran.png";
import donationIcon from "@/assets/Ilastrations/donation.svg";
import fastingIcon from "@/assets/Ilastrations/fasting.png";
import kabaIcon from "@/assets/Ilastrations/kaaba.png";
import namazIcon from "@/assets/Ilastrations/namaz.svg";

import prayerBG from "@/assets/Ilastrations/muslim-prayer.png";
import { PillarsDesc } from "./PillersDesc";
interface FivePillarsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const pillarsItem = [
  {
    name: "Profession of Faith",
    arabicName: "shahada",
    icon: quranIcon,
    desc: `
    Central to Islam is the belief "There is no god but God, and Muhammad is the Messenger of God." This Arabic phrase, featured in architecture and the Qur'an, is crucial. Reciting it with conviction is the pathway to becoming a Muslim.`,
  },
  {
    name: "Prayer",
    arabicName: "salat",
    icon: namazIcon,
    desc: `Muslims pray five times daily facing Mecca. Individual or group prayers, including reciting the Qur'an, occur on rugs or in mosques. Friday noon prayers include a sermon on a Qur'anic passage, prayers by the imam, and a religious discussion. Women are welcome but not obligated to attend.`,
  },
  {
    name: "Alms",
    arabicName: "zakat",
    icon: donationIcon,
    desc: `Muslims, following Islamic law, contribute a fixed portion of their income to support needy community members. Rulers and affluent individuals construct mosques, hospitals, schools, and other institutions, fulfilling a religious duty and seeking blessings through charity.`,
  },
  {
    name: "Fasting",
    arabicName: "sawm",
    icon: fastingIcon,
    desc: `In  Ramadan, healthy adult Muslims abstain from food and drink during daylight hours. This temporary deprivation fosters gratitude for God's provisions, including the Qur'an revealed in this month. Fasting also serves as a reminder to empathize with the hunger and thirst of the less fortunate, emphasizing the duty to assist those in need.`,
  },
  {
    name: "Pilgrimage",
    arabicName: "hajj",
    icon: kabaIcon,
    desc: `Muslims, if health and finances allow, must visit Mecca. The Ka'ba at the Haram Mosque is central; believers face it when praying. The Ka'ba, believed to be built by Abraham for God, attracts global gatherings on the eighth and twelfth days of the final Islamic calendar month since Prophet Muhammad's time.`,
  },
];

export const FivePillars: FC<FivePillarsProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="px-5 py-10">
      <h2 className="heading-main ">5 Pillar Of Islam</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="pillarGame">
          {pillarsItem.slice(0, 3).map((item) => {
            return (
              <div key={item.arabicName} className="space-y-2">
                <div className="pillarItem">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <div>
                    <p className="font-medium text-lg">{item.name}</p>
                    <p>{item.arabicName}</p>
                  </div>
                </div>
                <PillarsDesc desc={item.desc} />
              </div>
            );
          })}
        </div>
        <Image src={prayerBG} alt="Prayer" className="lg:block hidden" />
        <div className="pillarGame">
          {pillarsItem.slice(3, 5).map((item) => {
            return (
              <div key={item.arabicName}>
                <div className="pillarItem ">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <div>
                    <p className="font-medium text-lg">{item.name}</p>
                    <p>{item.arabicName}</p>
                  </div>
                </div>

                <PillarsDesc desc={item.desc} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
