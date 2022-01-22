import Image from "next/image"
import styles from "../styles/Cart.module.css"

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt=""/>
                </div>
            </div>
            <div className={styles.right}>
            </div>
        </div>
    )
};

export default Cart;
