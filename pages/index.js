import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Elang Segara</title>
        <meta name="description" content="Elang Segara Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Elang<br/>Bayu<br/>Segara
        </h1>

      </main>

    </div>
  )
}
