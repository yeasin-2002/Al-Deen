import {
  FivePillars,
  Hero,
  RandomHadith,
  ShowPrayerTime,
} from "@/components/Home";

export default function Home() {
  return (
    <main className="bg-gold-light space-y-10">
      <Hero />
      <ShowPrayerTime />
      <RandomHadith />
      <FivePillars />
    </main>
  );
}
