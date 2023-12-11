import Image from "next/image";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import quranIcon from "@/assets/Ilastrations/al-quran.png";
import donationIcon from "@/assets/Ilastrations/donation.svg";
import fastingIcon from "@/assets/Ilastrations/fasting.png";
import kabaIcon from "@/assets/Ilastrations/kaaba.png";
import prayerIcon from "@/assets/Ilastrations/muslim-man-is-praying.svg";
import namazIcon from "@/assets/Ilastrations/namaz.svg";

interface FivePillarsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const pillarsItem = [
  {
    name: "Profession of Faith",
    arabicName: "shahada",
    icon: quranIcon,
    desc: `The belief that "There is no god but God, and Muhammad is the Messenger of God" is central to Islam. This phrase, written in Arabic, is often prominently featured in architecture and a range of objects, including the Qur'an, Islam's holy book of divine revelations. One becomes a Muslim by reciting this phrase with conviction`,
  },
  {
    name: "Prayer",
    arabicName: "salat",
    icon: namazIcon,
    desc: `Muslims pray facing Mecca five times a day: at dawn, noon, mid-afternoon, sunset, and after dark. Prayer includes a recitation of the opening chapter (sura) of the Qur'an, and is sometimes performed on a small rug or mat used expressly for this purpose (see image 24). Muslims can pray individually at any location (fig. 1) or together in a mosque, where a leader in prayer (imam) guides the congregation. Men gather in the mosque for the noonday prayer on Friday; women are welcome but not obliged to participate. After the prayer, a sermon focuses on a passage from the Qur'an, followed by prayers by the imam and a discussion of a particular religious topic.    `,
  },
  {
    name: "Alms",
    arabicName: "zakat",
    icon: donationIcon,
    desc: `In accordance with Islamic law, Muslims donate a fixed portion of their income to community members in need. Many rulers and wealthy Muslims build mosques, drinking fountains, hospitals, schools, and other institutions both as a religious duty and to secure the blessings associated with charity.`,
  },
  {
    name: "Fasting",
    arabicName: "sawm",
    icon: fastingIcon,
    desc: `During the daylight hours of Ramadan, the ninth month of the Islamic calendar, all healthy adult Muslims are required to abstain from food and drink. Through this temporary deprivation, they renew their awareness of and gratitude for everything God has provided in their lives—including the Qur'an, which was first revealed during this month. During Ramadan they share the hunger and thirst of the needy as a reminder of the religious duty to help those less fortunate.`,
  },
  {
    name: "Pilgrimage",
    arabicName: "hajj",
    icon: kabaIcon,
    desc: `Every Muslim whose health and finances permit it must make at least one visit to the holy city of Mecca, in present-day Saudi Arabia. The Ka'ba, a cubical structure covered in black embroidered hangings, is at the center of the Haram Mosque in Mecca (fig. 2). Muslims believe that it is the house Abraham (Ibrahim in Arabic) built for God, and face in its direction (qibla) when they pray. Since the time of the Prophet Muhammad, believers from all over the world have gathered around the Ka'ba in Mecca on the eighth and twelfth days of the final month of the Islamic calendar.`,
  },
];

export const FivePillars: FC<FivePillarsProps> = ({ ...rest }) => {
  return (
    <div {...rest} className="px-5 py-10">
      <h2 className="font-bold text-xl my-6">5 Pillar Of Islam</h2>
      <div className="grid grid-cols-3">
        <div className="flex  flex-col justify-between gap-y-3">
          {pillarsItem.slice(0, 3).map((item) => {
            return (
              <div key={item.arabicName} className="space-y-2">
                <div className="flex gap-x-3 items-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <p className="text-xl font-bold text-gray-600">
                    {item.name} / {item.arabicName}{" "}
                  </p>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <Image src={prayerIcon} alt="Prayer" />
        <div className="flex  flex-col gap-y-3">
          {pillarsItem.slice(3, 5).map((item) => {
            return (
              <div key={item.arabicName}>
                <div className="flex gap-x-3 items-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                  <p className="text-xl font-bold text-gray-600">
                    {item.name} / {item.arabicName}{" "}
                  </p>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
