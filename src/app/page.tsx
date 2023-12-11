import {
  FivePillars,
  Hero,
  RandomHadith,
  ShowPrayerTime,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="bg-gold-light">
      <Hero />
      <ShowPrayerTime />
      <FivePillars />
      <RandomHadith />
    </main>
  );
}
