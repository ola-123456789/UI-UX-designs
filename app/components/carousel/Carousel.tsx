import React from 'react';
import { Carousel } from 'antd';
import styles from "./Carousel.module.scss";

const contentStyle: React.CSSProperties = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '800px',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


const App: React.FC = () => (
    <div className={styles.carouselDiv}>
        <Carousel  arrows effect="fade" className={styles.carousel}>
            <div>
                <img src="/Slide Item — 1.png" alt="" />
            </div>
            <div>
                <img src="/Slide Item — 2.png" alt="" />
            </div>
            <div>
                <img src="/Slide Item — 3.png" alt="" />
            </div>
            <div>
                <img src="/Slide Item — 4.png" alt="" />
            </div>
        </Carousel>

    </div>

);

export default App;