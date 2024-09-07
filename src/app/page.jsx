import Image from "next/image";
import "./page.scss";
import { HeadingBanner } from "../components";

export default function Home() {
  return (
    <main className="shubhMe">
      <HeadingBanner />
    </main>
  );
}
