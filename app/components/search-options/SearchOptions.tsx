import { useState } from "react";
import styles from "./SearchOptions.module.scss"

type Props = {
    data: Array<string>;
}



export default function SearchOptions({data}: Props) {

    

    const [filteredProducts, setFilteredProduct] = useState([])

    // const searchResult = (input: string) => {
    //     if (!input) {
    //         let newArray =  options.slice(0, 6)
    //        setFilteredProduct(newArray)
    //     }
    //     else {
    //         const finding = () => {
    //             options.filter((option) => {
    //                 option.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    //             })
    //         }
    //         newArray = finding
    //         return newArray;
    //     }
    // }






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

