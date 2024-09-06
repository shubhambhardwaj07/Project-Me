import Image from "next/image";
import styles from "./page.module.scss";
import HeadingBanner from "./components/HeadingBanner";

export default function Home() {
  return (
    <main className={styles.shubhMe}>
      <HeadingBanner />
    </main>
  );
}
