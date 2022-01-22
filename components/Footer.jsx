import Image from 'next/image';
import React from 'react';
import styles from "../styles/Footer.module.css"

const Footer = () => {
    
    return (
        <div className={styles.container}>
            <div className={styles.footerItem}>
                <Image src="/img/bg.png" layout="fill" alt="" />
                
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2>WE DID IT, WELL BAKED SLICE OF PIZZA</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        37B, RAYFIELD RESORTS #125
                        <br /> JOS, 85022
                        <br/> (243) 81498
                    </p>
                    <p className={styles.text}>
                        27A, RAYFIELD RESORTS #125
                        <br /> JOS, 85022
                        <br/> (243) 81498
                    </p><p className={styles.text}>
                        37B, RAYFIELD RESORTS #125
                        <br /> JOS, 85022
                        <br/> (243) 81498
                    </p>
                    <p className={styles.text}>
                        JENNY KITCh #126
                        <br /> JOS, 85022
                        <br/> (243) 81498
                    </p>
                </div>
                <div className={styles.card}></div>
            </div>
        </div>
    )
};

export default Footer;
