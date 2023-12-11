import { Hero, ShowPrayerTime } from "@/components/Home";
import { ShowNames } from "@/components/Home/ShowNames";

export default function Home() {
  return (
    <main className="bg-gold-light">
      <Hero />
      <ShowPrayerTime />
      <ShowNames />
    </main>
  );
}
