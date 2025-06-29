import { DividerProps } from "antd";
import styles from "./LogIn.module.scss"







export default function LogIn() {

    return (
        <div className={styles.logInPage}>
            <div className={styles.div1}>
                {/* <div className={styles.logInFormDiv}> */}
                <div className={styles.welcomeDiv}>
                    <img src="/logo_final.png" alt="logo" className={styles.logoImg} />
                    <h1 className={styles.welcomeBack}>Welcome Back</h1>
                </div>

                <form className={styles.logInForm}>
                    <div className={styles.emailDiv}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className={styles.passwordDiv}>
                        <div className={styles.forgotPasswordLabelDiv}>
                            <div className={styles.passwordLabelDiv}>
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className={styles.forgotPasswordDiv}>
                                <a href="/" className={styles.forgotPassword}>forgot password</a>
                            </div>
                        </div>
                        <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className={styles.checkboxInputDiv}>
                        <input type="checkbox" className={styles.checkboxInput} />
                        <p className={styles.checkboxPar}>Remember for 30 days</p>
                    </div>
                    <div className={styles.submitBtnDiv}>
                        <button className={styles.submitBtn}>
                            Login
                        </button>
                    </div>
                </form>

                {/* </div> */}
                <div className={styles.orDiv}>
                    <hr />
                    <p>Or</p>
                    <hr />
                </div>
                <div className={styles.signInGoogleDiv}>
                    <button className={styles.signInGoogleBtn}>
                        <img src="/google_logo.png" alt="google logo" className={styles.googleLogoImg} />
                        <p className={styles.signInGooglePar}>Sign in with Google</p>
                    </button>
                    <button className={styles.signInFacebookBtn}>
                        <img src="/facebook_logo.png" alt="facebook logo" className={styles.googleLogoImg} />
                        <p className={styles.signInfacebookPar}>Sign in with Facebook</p>
                    </button>

                </div>

                <div className={styles.signUpDiv}>
                    <p>Don't have an account?</p>
                    <a href="/">Sign Up</a>
                </div>
            </div>
            <div className={styles.div2}>
                <img src="/logo_final.png" alt="logo" className={styles.loginImg} />
            </div>

        </div>
    )
}