import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React from 'react';

const Featured = () => {
    const texts = [
        {
            id: 1,
            text: "Buy One, Get One Free",
        },
        {
            id: 2,
            text: "50% off for referrals",
        },
        {
            id: 3,
            text: "Enjoy tasty meals"
        }
    ]
    
    return (
        <div className={styles.containers}>
            <div className={styles.arrowContainer} style={{left: 0}}>
                <Image className={styles.left} src="/img/arrowl.png" alt="" layout='fill'/>
            </div>
            
            {/* <h1 className={styles.text}>Buy One, Get one Free</h1> */}
            
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    {texts.map(({id, text}) => (
                        // <Image className={styles.food} key="i" src="/img/featured2.jpg " alt="" layout="fill"/>
                        <h1 className={styles.text} key={id}>{text} </h1>
                    ))} 
                </div>

                {/* <div className={styles.imgContainer}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div> */}
            </div>

            <div className={styles.arrowContainer} style={{right: 0}}>
                <Image src="/img/arrowr.png" alt="" layout='fill'/>
            </div>
        </div> 
    )
};

export default Featured;
