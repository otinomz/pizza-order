import React from 'react';
import styles from "../../styles/Product.module.css";
import Image from "next/image"
import {useState} from "react"

const Product = () => {
    const [size, setSize] = useState(0);    

    // creating dummy data
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "CAMPAGNOLA",
        price: [19.9, 23.9, 27.9],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
 
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.description}>{ pizza.desc}</p>
            </div> 
        </div>
    )
};

export default Product;
