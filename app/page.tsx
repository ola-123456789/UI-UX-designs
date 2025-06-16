import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel/Carousel";
import Test from "./components/test/Test";
import Grid from "./components/grid/grid";
import Search from "./components/search/Search";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.searchDiv}>
        <Search />
      </div>
      <div className={styles.carouselDiv}>
        <Carousel />
      </div>
      <div className={styles.gridDiv}>
        <Grid />
      </div>
    </div>
  );
}

