import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzila</title>
        <meta name="description" content="Online pizza store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* component goes in here */}
      <Featured />
      <ProductList/>

    </div>
  )
}
