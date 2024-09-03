import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.shubhMe}>
      <div className={styles.imageOverlayHp}></div>
      <div className={styles.pageHeading}>Shubham Bhardwaj</div>
    </main>
  );
}
