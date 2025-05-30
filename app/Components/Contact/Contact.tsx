'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';
import Title from '../Section/Title/Title';

interface FormData {
  [key: string]: string;
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [userInput, setUserInput] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'success' | 'error' | 'validating'
  >('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    setStatus('idle');
    setErrorMsg('');
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('validating');

    if (!userInput.name || !userInput.email || !userInput.message) {
      setStatus('error');
      setErrorMsg('All fields are required.');
      return;
    }

    if (!validateEmail(userInput.email)) {
      setStatus('error');
      setErrorMsg('Enter a valid email address.');
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        userInput as Record<string, unknown>,
        userID
      );
      setUserInput({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
      console.error('EmailJS error:', error);
      setErrorMsg('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className={styles.contact} id='contact'>
      <Title
        title='Say hello'
        description=' Not into meetings? <br/>Leave me a message below, <br/>and I’ll shoot you an
          email in no time!'
      />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.column}>
          <textarea
            name='message'
            placeholder='Tell me about your project.'
            className={styles.message}
            value={userInput.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.column}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            className={styles.input}
            value={userInput.name}
            onChange={handleChange}
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            className={styles.input}
            value={userInput.email}
            onChange={handleChange}
            required
          />
          <button
            type='submit'
            className={styles.submit}
            disabled={status === 'validating'}
          >
            {status === 'validating' ? 'Sending...' : 'Submit'}
          </button>

          {/* Feedback messages */}
          {status === 'success' && (
            <p
              style={{
                color: '#0f9d58',
                fontSize: '14px',
                fontFamily: 'Outfit',
                marginTop: '12px',
              }}
            >
              ✅ Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p
              style={{
                color: '#d93025',
                fontSize: '14px',
                fontFamily: 'Outfit',
                marginTop: '12px',
              }}
            >
              ⚠️ {errorMsg}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
