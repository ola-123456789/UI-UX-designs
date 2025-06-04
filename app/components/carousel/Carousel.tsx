'use client';

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


const App: React.FC = () => (
    <div className={styles.carouselDiv}>
        <Carousel arrows autoplay effect="fade" className={styles.carousel}>
            <div>
                <img src="/slide 1.webp" alt="" />
            </div>
            <div>
                <img src="/slide 2.jpeg" alt="" />
            </div>
            <div>
                <img src="/slide 3.jpg" alt="" />
            </div>
            <div>
                <img src="/slide 4.jpg" alt="" />
            </div>
        </Carousel>

    </div>

);

export default App;