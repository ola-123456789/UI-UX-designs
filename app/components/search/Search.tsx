import React from 'react';
import styles from "./Search.module.scss"

export default function Search() {



    return (
        <div className={styles.searchDiv}>
            <form className={styles.searchForm}>
                <div className={styles.inputDiv}>
                    <input type="search" placeholder='What are you looking for' className={styles.input} />
                </div>
                <div className={styles.clearBtnDiv}>
                    <button type='reset' className={`${styles.clearBtn} ${styles.btn}`}>
                        <img src="/ic--baseline-clear.svg" alt="" />
                    </button>
                </div>
                <div className={styles.searchBtnDiv}>
                    <button className={`${styles.searchBtn} ${styles.btn}`}>
                        <img src="/material-symbols-light--search.svg" alt="" />
                    </button>

                </div>

            </form>
        </div>

    )
}


