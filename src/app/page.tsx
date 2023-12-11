import {
  FivePillars,
  Hero,
  ShowNames,
  ShowPrayerTime,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="bg-gold-light">
      <Hero />
      <ShowPrayerTime />
      <ShowNames />
      <FivePillars />
    </main>
  );
}
