"use client"

import { useState } from "react"
import GridItem from "../grid-item/GridItem"
import styles from "./grid.module.css"
import { Button } from 'antd';




export default function Grid() {

    const itemsArray = [{
        "id": 1,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 2,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 3,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 4,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 5,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 6,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 7,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 8,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 9,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 10,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 11,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 12,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 13,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 14,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 15,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }, {
        "id": 16,
        "imageSrc": "./image-equilibrium.jpg",
        "avatarSrc": "./image-avatar.png",
        "creatorName": "Jules Wyvern"
    }]


    const [griItemsCount, setGriItemsCount] = useState(8)

    const handleLoadMore = () => {
        setGriItemsCount(griItemsCount + 4)
    }

    return (
        <>
            <div className={styles.grid}>
                {itemsArray.slice(0, griItemsCount).map((item) => (
                    <GridItem imageSrc={item.imageSrc} avatarSrc={item.avatarSrc} creatorName={item.creatorName} key={item.id} />
                ))}

            </div>

            {griItemsCount < itemsArray.length && (
                <div className={`${styles.loadMoreBtnActive} ${styles.loadMoreBtn}  `}>
                    <Button block onClick={handleLoadMore}>Load More</Button>
                </div>
            )}

            {griItemsCount >= itemsArray.length && (
                <div className={`${styles.loadMoreBtnDisabled} ${styles.loadMoreBtn}`}>
                    <Button disabled block>
                        Load More
                    </Button>
                </div>
            )}
        </>



    )
}