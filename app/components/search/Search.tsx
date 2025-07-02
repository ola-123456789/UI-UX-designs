"use client"

import React, { useEffect, useState } from 'react';
import styles from "./Search.module.scss"
import SearchFilter from '../search-filter/SearchFilter';
import SearchOptions from '../search-options/SearchOptions';

export default function Search() {


    // const options = ["Dashboard", "Landing page", "Card", "Login", "Notification", "Portfolio", "Product Design", "Web Design", "animation", "Branding", "Illustration", "Mobile", "Typography", "Print"]

    const [inputValue, setInputValue] = useState("")
    const [isFocus, setIsFocus] = useState(false)
    const [result, setResult] = useState<string[]>([])
    const [options, setOptions] = useState<string[]>(["Dashboard", "Landing page", "Card", "Login", "Notification", "Portfolio", "Product Design", "Web Design", "animation", "Branding", "Illustration", "Mobile", "Typography", "Print"])

    const searchResult = (input:string, dataArray: Array<string>) => {

        if (!input) return dataArray.slice(0,6)
        
        return dataArray.filter((data) => 
            data.slice(0, input.length).toLowerCase().includes(input.toLowerCase())
        )

    }

    useEffect(() => {

        const found = searchResult(inputValue, options);
        setResult(found);

    }, [inputValue])

    return (
        <div className={styles.searchDiv}>
            <h1 className={styles.searchDivH1}>Discover the top designers for your projects</h1>
            <h2 className={styles.searchDivH2}>Explore work from the most talented and accomplished designers ready to take on your next project.</h2>

            <SearchFilter />

            <form className={styles.searchForm}>
                <div className={styles.inputDiv}>
                    <input type="search" placeholder='What are you looking for' className={styles.input} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onFocus={() => setIsFocus(true)}  />

                    {/* onBlur={() => setIsFocus(false)} */}

                    <div className={styles.clearBtnDiv} style={{ opacity: inputValue ? "0.5" : "0" }}>
                        <button type='reset' className={`${styles.clearBtn} ${styles.btn}`} onClick={() => setInputValue('')}>
                            <img src="/ic--baseline-clear.svg" alt="" className={styles.clearBtnImg} />
                        </button>
                    </div>

                    <div className={styles.searchBtnDiv}>
                        <button className={`${styles.searchBtn} ${styles.btn}`}>
                            <img src="/material-symbols-light--search.svg" alt="" />
                        </button>

                    </div>
                </div>


            </form>

            {result.length === 0 || isFocus && <SearchOptions data={result}/>}
        </div>

    )
}


