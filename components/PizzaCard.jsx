import Image from 'next/image';
import React from 'react';
import styles from "../styles/PizzaCard.module.css"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequatur, a suscipit voluptate nemo incidunt minima reprehenderit, modi dicta, perspiciatis optio cumque itaque. Eum ipsum dolores veritatis voluptate facere? Voluptatem?
                Assumenda possimus reiciendis fugiat impedit
                ernatur accusantium fuga officiis necessitatibusis at iusto
            </p>
            
        </div>
    )
};

export default PizzaCard;
