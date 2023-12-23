import Image from 'next/image'
import styles from './page.module.css'
import HomePage from '@/component/HomePage/HomePage'
import Header from '@/component/Header/Header'
import Footer from '@/component/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage/>
    </main>
  )
}
