import {
  FivePillars,
  Hero,

  ShowPrayerTime,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="bg-gold-light">
      <Hero />
      <ShowPrayerTime />
      <FivePillars />
    </main>
  );
}
