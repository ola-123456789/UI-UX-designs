import styles from "./GridItem.module.css"


type Props = {
    "imageSrc": string,
    "avatarSrc": string,
    "creatorName": string
}



export default function GridItem( props:Props ) {




    return (

        <div className={styles.mainDivClass}>
            <div className={styles.imgDiv}>
                <img
                    id={styles.equilibriumImg}
                    className={styles.equilibriumImg}
                    src={props.imageSrc}
                    alt=""
                />
            </div>
            <hr className={styles.hrClass} />
            <div className={styles.avatarDiv}>
                <img className={styles.imgAvatar} src={props.avatarSrc} alt="" />
                <p className={styles.avatarPar}>Creation of</p>
                <p className={styles.avatarPar2}>{props.creatorName}</p>
            </div>
        </div>

    )
}