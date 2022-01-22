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
                {/* this will basically render the index number of the size and display the amount in here */}
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.description}>{ pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>

                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="Size" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)} >
                        <Image src="/img/size.png" layout="fill" alt="Size" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="Size" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <label className={styles.label} htmlFor="double">Double Ingredients</label > 
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            className={styles.checkbox}
                        />
                        <label className={styles.label} htmlFor="cheese">Extra cheese</label > 
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            className={styles.checkbox}
                        /> 
                        <label className={styles.label} htmlFor="spicy">Spicy sauce</label> 
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className={styles.checkbox}
                        />
                        <label className={styles.label} htmlFor="garlic">Garlic sauce</label> 
                    </div>
                </div>

                <div className={styles.add}>
                    
                </div>
            </div> 
        </div>
    )
};

export default Product;
