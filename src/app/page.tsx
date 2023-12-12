import { Footer, Nav } from "@/components";
import {
  FivePillars,
  Hero,
  RandomHadith,
  ShowPrayerTime,
} from "@/components/Home";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Nav />
      <main className="bg-gold-light">
        <Hero />
        <ShowPrayerTime />
        <FivePillars />
        <RandomHadith />
      </main>
      <Footer />
    </Fragment>
  );
}
