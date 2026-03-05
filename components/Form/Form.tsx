'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styles from './Form.module.css'

export default function Form() {
  const form = useRef<HTMLFormElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [details, setDetails] = useState('')
  const [packageType, setPackageType] = useState('')
  const [isSubmitted, setIsSubmitted] = useState<'yes' | 'no' | ''>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    const toast = document.getElementById('toast')
    e.preventDefault()
    setIsSubmitting(true)
    if (name === '' || email === '' || message === '') {
      setIsSubmitting(false)
      setToastMessage('Please fill the empty fields')
      if (toast) {
        toast.className = `${styles.error} ${styles.toast}`
        toast.style.display = 'block'
        setTimeout(() => {
          toast.style.display = 'none'
        }, 4000)
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
            setToastMessage(
              'Thanks for contacting. I will get back to you as soon as possible.'
            )
            if (toast) {
              toast.className = `${styles.success} ${styles.toast}`
              toast.style.display = 'block'
              setTimeout(() => {
                toast.style.display = 'none'
              }, 4000)
            }

            if (result.text === 'OK') {
              setName('')
              setEmail('')
              setMessage('')
              setDetails('')
              setPackageType('')
              setIsSubmitted('yes')
              setIsSubmitting(false)
            } else {
              setIsSubmitted('no')
              setIsSubmitting(false)
            }
          },
          (error: any) => {
            if (toast) {
              toast.className = `${styles.error} ${styles.toast}`
              toast.style.display = 'block'
              setTimeout(() => {
                toast.style.display = 'none'
              }, 4000)
            }
            setIsSubmitting(false)
          }
        )
    }
  }

  return (
    <div>
      <div id="toast" className={styles.toast}>
        {toastMessage}
      </div>
      <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <textarea
              className={`${styles.input} ${styles.messageArea}`}
              name="message"
              value={message}
              placeholder="Tell me about your project."
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
          </div>
          <div className={styles.right}>
            <textarea
              className={`${styles.input} ${styles.detailsArea}`}
              name="details"
              value={details}
              placeholder="Any additional details..."
              onChange={(e) => {
                setDetails(e.target.value)
              }}
            />
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
            <input
              className={styles.input}
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
            <select
              className={`${styles.input} ${styles.select}`}
              name="package"
              value={packageType}
              onChange={(e) => {
                setPackageType(e.target.value)
              }}
            >
              <option value="" disabled>
                Choose a package
              </option>
              <option value="Landing Page">Landing Page</option>
              <option value="Multiple Pages">Multiple Pages</option>
              <option value="Custom">Custom</option>
            </select>
            <input
              className={`button ${styles.submitBtn}`}
              type="submit"
              value={isSubmitting ? 'Sending...' : 'Send'}
            />
          </div>
        </div>
      </form>
    </div>
  )
}
