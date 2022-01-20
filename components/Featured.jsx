import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React from 'react';

const Featured = () => {
    
    return (
        <div className={styles.container}>
            <Image src="/img/arrowl.png" alt="" />
            <div className={styles.wrapper}>
                <div className={styles.ImgContainer}>
                    <Image src="/img/featured.png" alt="" />
                </div>
            </div>
            <Image src="/img/arrowr.png" alt="" />  
        </div> 
    )
};

export default Featured;
