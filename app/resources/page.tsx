import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact - Muhammad Osama',
  description: '',
}

export default async function Contact() {
  return <div className={styles.contact} id='contact'></div>
}
