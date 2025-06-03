import React from 'react';
import { Carousel } from 'antd';
import styles from "./Carousel.module.scss";

// const contentStyle: React.CSSProperties = {
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//     // width: '800px',
//     // display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
// };


// const App: React.FC = () => (
//     <div className={styles.carouselDiv}>
//         <Carousel arrows effect="fade" className={styles.carousel}>
//             {/* <div>
//                 <img src="/Slide Item — 1.png" alt="" />
//             </div>
//             <div>
//                 <img src="/Slide Item — 2.png" alt="" />
//             </div>
//             <div>
//                 <img src="/Slide Item — 3.png" alt="" />
//             </div>
//             <div>
//                 <img src="/Slide Item — 4.png" alt="" />
//             </div> */}

//             <div>

//                 <h3 style={contentStyle}>2</h3>
//             </div>
//             <div>
//                 <img src="/Slide Item — 1.png" alt="" />
//             </div>
//             <div>
//                 <h3 style={contentStyle}>3</h3>
//             </div>
//             <div>
//                 <h3 style={contentStyle}>4</h3>
//             </div>
//         </Carousel>

//     </div>

// );


const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App: React.FC = () => (
    <Carousel arrows effect="fade" infinite={false}>
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default App;