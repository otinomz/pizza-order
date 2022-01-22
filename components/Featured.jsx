import Image from 'next/image';
import styles from "../styles/Featured.module.css";
import React, {useState} from 'react';

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

const Featured = () => {
    const [number, setNumber] = useState(0)

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
            
            <div className={styles.wrapper}
                style={{transform: `translateX(${-100*number}vw)`}}
            >

                {texts.map(({id, text}) => (
                        <div key={id} className={styles.imgContainer}>
                            <h1>{text}</h1>
                        </div>
                    ))
                }

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
