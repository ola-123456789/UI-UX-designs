import styles from "./Navbar.module.scss"

export default function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbarLinks}>
                    <div className={styles.logoDiv}>
                        <img src="/black.png" alt="Logo" />
                    </div>
                    <div className={styles.navbarUlDiv}>
                        <ul>
                            <li><a href="#"></a>Option 1</li>
                            <li><a href="#"></a>Option 2</li>
                            <li><a href="#"></a>Option 3</li>
                            <li><a href="#"></a>Option 4</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.logInSignUp}>
                    <div className={styles.loginBtnDiv}>
                        <button className={styles.loginBtn}>
                            <div className={styles.loginBtnParDiv}>
                                <p>Sign In</p>
                            </div>
                            <div className={styles.loginBtnImgDiv}>
                                <img className={styles.loginBtnImg} src="/Right Arrow.png" alt="" />
                            </div>
                        </button>
                    </div>
                    <div className={styles.signupBtnDiv}>
                        <button className={styles.signupBtn}>
                            <p className={styles.signupBtnPar}>Get Started</p>
                        </button>
                    </div>

                </div>

            </nav>
        </div>
    )
}