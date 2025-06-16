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
        <Carousel autoplay arrows effect="fade" className={`${styles.carousel}`}>
            <div>
                <img src="/slide 1.webp" alt="" />
                <div className={styles.CarouselTextDiv}>
                    <h5>The best Designer 1 is:</h5>
                    <p>Ketevan shatberashvili 1</p>
                </div>
            </div>
            <div>
                <img src="/slide 2.jpeg" alt="" />
                <div className={styles.CarouselTextDiv}>
                    <h5>The best Designer 2 is:</h5>
                    <p>Ketevan shatberashvili 2</p>
                </div>
            </div>
            <div>
                <img src="/slide 3.jpg" alt="" />
                <div className={styles.CarouselTextDiv}>
                    <h5>The best Designer 3 is:</h5>
                    <p>Ketevan shatberashvili 3</p>
                </div>
            </div>
            <div>
                <img src="/slide 4.jpg" alt="" />
                <div className={styles.CarouselTextDiv}>
                    <h5>The best Designer 4 is:</h5>
                    <p>Ketevan shatberashvili 4</p>
                </div>
            </div>
        </Carousel>

    </div>

);

export default App;