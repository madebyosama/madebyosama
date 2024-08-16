import { Metadata } from 'next';
import styles from './contact.module.css';
import Form from '@/components/form/Form';
import Title from '@/components/title/Title';

export const metadata: Metadata = {
  title: 'Contact - Muhammad Osama',
  description: '',
};

export default async function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <Title sub='Get connected with' title='Muhammad Osama' description='' />
      <Form />
    </div>
  );
}
