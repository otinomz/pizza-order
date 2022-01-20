import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React from 'react';

const Featured = () => {
    const images = [
        "/img/featured.jpg",
        "/img/featured2.jpg",
        "/img/featured3.jpg"
    ]
    
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left: 0}}>
                <Image src="/img/arrowl.png" alt="" layout='fill'/>
            </div>
            <Image src="/img/arrowl.png" alt="" layout='fill'/>
            <div className={styles.wrapper}>
                <div className={styles.ImgContainer}>
                    {images.map((img, i) => (
                        <Image key={i} src="/img/featured3.jpg " alt="" layout="fill"/>
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer} style={{right: 0}}>
                <Image src="/img/arrowr.png" alt="" layout='fill'/>
            </div>
        </div> 
    )
};

export default Featured;
