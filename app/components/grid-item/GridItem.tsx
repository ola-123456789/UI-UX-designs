import styles from "./GridItem.module.css"



export default function GridItem() {


    return (

        <div className={styles.mainDivClass}>
            <div className={styles.imgDiv}>
                <img
                    id={styles.equilibriumImg}
                    className={styles.equilibriumImg}
                    src="./image-equilibrium.jpg"
                    alt="image-equilibrium"
                />
                <div className={styles.activeDiv}></div>
                <div className={styles.iconViewDiv}>
                    <img className={styles.iconViewImg} src="./icon-view.svg" alt="icon-view-img" />
                </div>
            </div>

            <h1>Equilibrium #3429</h1>
            <p className={styles.bodyPar}>
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div className={styles.bodyDivClass}>
                <img
                    className={styles.etheriumImg}
                    src="./icon-ethereum.svg"
                    alt="icon-ethereum"
                />
                <p className={styles.ethPar}>0.041 ETH</p>
                <img className={styles.clockImg} src="./icon-clock.svg" alt="icon-clock" />
                <p className={styles.leftPar} id={styles.leftPar}>3 days left</p>
            </div>
            <hr className={styles.hrClass} />
            <div className={styles.avatarDiv}>
                <img className={styles.imgAvatar} src="./image-avatar.png" alt="image-avatar" />
                <p className={styles.avatarPar}>Creation of</p>
                <p className={styles.avatarPar2}>Jules Wyvern</p>
            </div>
        </div>

    )
}