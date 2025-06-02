import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel/Carousel";

export default function Home() {
  return (
    <div className={styles.main}>
      <Carousel />
    </div>
    // <div className={styles.page}>
    //   <main className={styles.main}>
        
    //   </main>
    //   <footer className={styles.footer}>
       
    //   </footer>
    // </div>
  );
}

