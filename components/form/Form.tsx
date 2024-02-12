'use client';
import { use, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.css';

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState<'yes' | 'no' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('Test');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('test');

    const toast = document.getElementById('toast');
    console.log(toast);
    console.log(styles.error);
    e.preventDefault();
    setIsSubmitting(true);
    if (name === '' || email === '' || message === '') {
      setIsSubmitting(false);
      setToastMessage('Please fill the empty fields');
      if (toast) {
        toast.className = `${styles.error} ${styles.toast}`;
        toast.style.display = 'block';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 4000);
      }
    } else {
      emailjs
        .sendForm(
          'madebyosama',
          'madebyosama',
          form.current!,
          'zbq-CVetTYcRlRNvi'
        )
        .then(
          (result: any) => {
            console.log(result);
            setToastMessage(
              'Thanks for contacting. I will get back to you as soon as possible.'
            );
            if (toast) {
              toast.className = `${styles.success} ${styles.toast}`;
              toast.style.display = 'block';
              setTimeout(() => {
                toast.style.display = 'none';
              }, 4000);
            }

            if (result.text === 'OK') {
              setName('');
              setEmail('');
              setSubject('');
              setMessage('');
              setIsSubmitted('yes');
              setIsSubmitting(false);
            } else {
              setIsSubmitted('no');
              setIsSubmitting(false);
            }
          },
          (error: any) => {
            if (toast) {
              toast.className = `${styles.error} ${styles.toast}`;
              toast.style.display = 'block';
              setTimeout(() => {
                toast.style.display = 'none';
              }, 4000);
            }
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div>
      <div id='toast' className={styles.toast}>
        {toastMessage}
      </div>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.inputs}>
          <div className={styles.left}>
            <input
              className={styles.input}
              name='name'
              type='text'
              value={name}
              placeholder='Full Name'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className={styles.input}
              name='email'
              type='email'
              value={email}
              placeholder='Your Email'
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <textarea
              className={`${styles.input} ${styles.message}`}
              name='message'
              value={message}
              placeholder='Message'
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <input
          className='button'
          type='submit'
          value={isSubmitting ? 'Sending...' : 'Send'}
        />
      </form>
    </div>
  );
}
