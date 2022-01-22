import Image from 'next/image';
import React from 'react';
import styles from "../styles/Footer.module.css"

const Footer = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
                
            </div>
            <div className={styles.item}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.item}></div>
            </div>
        </div>
    )
};

export default Footer;
