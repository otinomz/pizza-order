import Image from 'next/image';
import React from 'react';
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="200" height="200" />
            <h1 className={styles.title}>FLORI SPIN</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.description}>
                natur accusantium fuga officiis necessitatibusis at iusto
            </p>
            
        </div>
    )
};

export default PizzaCard;
