import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React from 'react';

const Featured = () => {
    const imagesss = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.png"
    ]
    
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer}>
                <Image src="/img/arrowl.png" alt="" layout='fill'/>
            </div>
            <Image src="/img/arrowl.png" alt="" layout='fill'/>
            <div className={styles.wrapper}>
                <div className={styles.ImgContainer}>
                    {imagesss.map(( img, i) => (
                        (<img src="/imgfeatured.png" alt="" />)
                    ))}
                </div>
            </div>
            <div className={styles.arrowContainer}>
                <Image src="/img/arrowr.png" alt="" layout='fill'/>
            </div>
        </div> 
    )
};

export default Featured;
