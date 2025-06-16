"use client"

import React, { useState } from 'react';
import styles from "./Search.module.scss"

export default function Search() {

    const [inputValue, setInputValue] = useState("")


    return (
        <div className={styles.searchDiv}>
            <form className={styles.searchForm}>
                <div className={styles.inputDiv}>
                    <input type="search" placeholder='What are you looking for' className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
                <div className={styles.clearBtnDiv} style={{opacity: inputValue ? "0.5" : "0"}}>
                    <button type='reset' className={`${styles.clearBtn} ${styles.btn}`} onClick={() => setInputValue ('')}>
                        <img src="/ic--baseline-clear.svg" alt="" className={styles.clearBtnImg} />
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


