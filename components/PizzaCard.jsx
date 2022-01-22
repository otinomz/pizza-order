import Image from 'next/image';
import React from 'react';
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
             <Image src="/img/pizza.png" alt="" width="500" height="500" />
        </div>
    )
};

export default PizzaCard;
