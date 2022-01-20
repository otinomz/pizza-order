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
            <Image src="/img/arrowl.png" alt="" layout='fill'/>
            <div className={styles.wrapper}>
                <div className={styles.ImgContainer}>
                    {images.map((img, id) => (
                        <Image key={id} src="/img/featured.jpg " alt="" layout="fill"/>
                    ))}
                </div>
            </div>
            <Image src="/img/arrowr.png" alt="" layout="fill" />  
        </div> 
    )
};

export default Featured;
