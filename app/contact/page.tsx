import { Metadata } from 'next';
import styles from './contact.module.css';
import Form from '@/components/Form/Form';
import Title from '@/components/Title/Title';

export const metadata: Metadata = {
  title: 'Contact - Muhammad Osama',
  description: '',
};

export default async function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <Title sub='Have a project?' title='Contact me' description='' />
      <Form />
    </div>
  );
}
