'use client'

import { useRouter } from "next/navigation"
import styles from "./Navbar.module.scss"
import Link from "next/link"

export default function Navbar() {

    const router = useRouter()

    const handleLogIn = () => {
        router.push("/logIn")
    }

    const handleSignUp = () => {
        router.push("/signUp")
    }



    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbarLinks}>
                    <div className={styles.logoDiv}>
                        <Link href="/"><img src="/logo_final.png" alt="Logo" className={styles.logoImg} /></Link>

                    </div>
                    <div className={styles.navbarUlDiv}>
                        <ul>
                            <li><Link href="#" />Option 1</li>
                            <li><Link href="#" />Option 2</li>
                            <li><Link href="#" />Option 3</li>
                            <li><Link href="#" />Option 4</li>
                        </ul>
                    </div>

                </div>

                <div className={styles.logInSignUp}>
                    <div className={styles.loginBtnDiv}>
                        <button className={styles.loginBtn} onClick={handleLogIn}>
                            <div className={styles.loginBtnParDiv}>
                                <p>Log In</p>
                            </div>
                            <div className={styles.loginBtnImgDiv}>
                                <img className={styles.loginBtnImg} src="/Right Arrow.png" alt="" />
                            </div>
                        </button>

                    </div>
                    <div className={styles.signupBtnDiv}>
                        <button className={styles.signupBtn} onClick={handleSignUp} >
                            <p className={styles.signupBtnPar}>Sign Up</p>
                        </button>

                    </div>

                </div>

            </nav>
        </div>
    )
}