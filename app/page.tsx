import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "./components/carousel/Carousel";
import Test from "./components/test/Test";
import Grid from "./components/grid/grid";

export default function Home() {
  return (
    <div className={styles.main}>
      <Carousel />
      <Grid />
    </div>
  );
}

