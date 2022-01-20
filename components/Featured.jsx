import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React from 'react';

const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ]
    
    return (
        <div className={styles.container}>
            <Image src="/img/arrowl.png" alt="" />
            <div className={styles.wrapper}>
                <div className={styles.ImgContainer}>
                    {images.map((img, id) => (
                        <Image key={id} src="/img/featured.png " alt="" />
                    ))}
                </div>
            </div>
            <Image src="/img/arrowr.png" alt="" />  
        </div> 
    )
};

export default Featured;
