import styles from './SearchFilter.module.scss'
import React, { useState } from 'react';

export default function SearchFilter() {

    const [selectFilter, setselectFilter] = useState("")


    return (

        <section className={styles.searchFilters}>
            <div className={`${styles.designDiv} ${selectFilter === "design" ? styles.active : " "}`}>
                <label htmlFor="design" className={styles.designLabel}>
                    <img src="/design icon.png" alt="design icon" className={styles.designIcon} />
                    <p className={styles.designPar}>Designs</p>
                </label>
                <input type='radio' name='searchFilter' className={styles.designInput} onClick={() => setselectFilter("design")} />
            </div>
            <div className={`${styles.creatorDiv} ${selectFilter === "creator" ? styles.active : " "}`}>
                <label htmlFor="creator">
                    <img src="/creator icon.png" alt="creator icon" className={styles.creatorIcon} />
                    <p className={styles.creatorPar}>Creators</p>
                </label>
                <input type='radio' name='searchFilter' className={styles.creatorInput} onClick={() => setselectFilter("creator")} />
            </div>
            <div className={`${styles.serviceDiv} ${selectFilter === "service" ? styles.active : " "} `}>
                <label htmlFor="service">
                    <img src="/service icon.png" alt="service icon" className={styles.serviceIcon} />
                    <p className={styles.servicePar}>Services</p>
                </label>
                <input type='radio' name='searchFilter' className={styles.serviceIcon} onClick={() => setselectFilter("service")} />
            </div>

        </section>



    )
}