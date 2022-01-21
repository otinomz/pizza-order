import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React, {useState} from 'react';

const Featured = () => {
    const [number, setNumber] = useState(0)

    const texts = [
        {
            id: 1,
            text: "Enjoy tasty meals"
        },
        {
            id: 2,
            text: "Best Homemade Pizza is Here",
        },
        {
            id: 3,
            text: "Buy 2, Get 3",
        }
        
    ]

    const handleArrow = (direction) => {
        if (direction === "l") {
            setNumber(number !== 0 ? number-1 : 2)
        }
        if (direction === "r") {
            setNumber(number !== 2 ? number+1 : 0)
        }
    }
    console.log(number)

    return (
        <div className={styles.containers}>
            <div className={styles.arrowContainer} style={{left: 0}} onClick={()=> handleArrow("l")}>
                <Image className={styles.left} src="/img/arrowl.png" alt="" layout='fill'/>
            </div>
            
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

            <div className={styles.arrowContainer}
                style={{ right: 0 }}
                onClick={() => handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="" layout='fill'/>
            </div>
        </div> 
    )
};

export default Featured;
