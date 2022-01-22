import React from 'react';
import styles from "../styles/ProductList.module.css"
import PizzaCard from './PizzaCard';

const ProductList = () => {

    return (
        <div className={styles.pizzaContainer}>
            <h1 className={styles.title}>The BEST PIZZA IN TOWN</h1>
            <p className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequatur, a suscipit voluptate nemo incidunt minima reprehenderit, modi dicta, perspiciatis optio cumque itaque. Eum ipsum dolores veritatis voluptate facere? Voluptatem?
                Assumenda possimus reiciendis fugiat impedit
                ernatur accusantium fuga officiis necessitatibusis at iusto
            </p>
            <div className={styles.wrapper}>
                {/* rendering Pizza card component here */}
                <PizzaCard/>
            </div>
        </div>
    )
}; 

export default ProductList;
