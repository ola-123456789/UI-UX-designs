import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss"

export default function Header(){

    return (
        <div className={styles.header}>
            <div className={styles.headerPart1}>
                <div className={`${styles.changeLanguage} ${styles.textColor}`}>
                    <div className={styles.message}>
                          <p className={styles.messageText}>Find the best designers</p>
                    </div>
                    <div className={styles.languageOptions}>
                        <p className={styles.language}>English</p>
                        <img className={styles.dropDownImg}src="../DropDown.png" alt="Drop Down" />
                    </div>
                </div>
            </div>
            <div className={styles.headerPart2}>
                <Navbar />
            </div>
        </div>
    )
}