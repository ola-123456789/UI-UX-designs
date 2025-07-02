import { useState } from "react";
import styles from "./SearchOptions.module.scss"

type Props = {
    data: Array<string>;
}



export default function SearchOptions({data}: Props) {

    
    return (
        <section className={styles.section}>
            <ul>
                {data.map((item: string, id: number) => (
                    <li key={id}>
                        <a href="/">
                            <div className={styles.optionDiv}>
                                <div>
                                    <img src="/search_icon.svg" alt="search icon" />
                                </div>
                                <div>
                                    <p className={styles.optionPar}>{item}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}

            </ul>
        </section>
    )
}

