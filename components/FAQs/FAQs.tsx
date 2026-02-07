'use client'

import { useState, useRef, useEffect, memo, useCallback } from 'react'
import styles from './FAQs.module.css'
import Title from '../Title/Title'

type FAQ = {
  question: string
  answer: string
}

const faqsData: FAQ[] = [
  {
    question: 'How do I get started?',
    answer:
      "Schedule an intro call, fill out the form above, shoot me an email, or slide into my DMs on X. Whatever feels right. I'm easy to reach and always up for a chat.",
  },
  {
    question: 'Which design package should I choose?',
    answer:
      "If you're after a sleek one-pager, the Landing Page package is your best bet. Need more depth? Go with the Multi-Page option. Got something custom in mind? Let's talk it through — flexibility is part of the process.",
  },
  {
    question: 'What If I need custom code in WordPress?',
    answer:
      "No problem — I'm fluent in WordPress customization. From plugins to custom fields, I can tailor the backend just how you need it.",
  },
  {
    question: 'How many revisions do I get?',
    answer:
      "I don't count revisions. We'll refine until it's right — within reason, of course. It's all about building something we're both proud of.",
  },
  {
    question: 'Which design software do you use?',
    answer:
      'Figma for UI, Framer for motion and dev, Photoshop and Illustrator for graphics, and Midjourney for AI-generated imagery.',
  },
  {
    question: 'I already have a design. Can you develop it?',
    answer:
      'Absolutely. If the design is clean and organized, I can bring it to life in WordPress, Framer, or wherever you need it.',
  },
  {
    question: 'I already have a website. Can you redesign it?',
    answer:
      "Redesigns are my favorite! There's something satisfying about leveling up an existing brand with a fresh new feel.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "I'll keep iterating with you to make it right. I don't offer refunds, but I do offer dedication.",
  },
  {
    question: 'Can you help me with branding?',
    answer:
      'Yes — I started out in branding before web stole my heart. Logos, voice, and identity design are totally in my zone.',
  },
]

const FAQItem = memo(function FAQItem({
  faq,
  isOpen,
  height,
  onToggle,
  answerRef,
}: {
  faq: FAQ
  isOpen: boolean
  height: number
  onToggle: () => void
  answerRef: (el: HTMLDivElement | null) => void
}) {
  return (
    <div className={styles.faq} onClick={onToggle}>
      <div className={styles.questionRow}>
        <div className={styles.question}>{faq.question}</div>
        <div
          className={styles.iconWrapper}
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          <div className={styles.iconLine}></div>
          <div className={styles.iconLine}></div>
        </div>
      </div>
      <div
        className={styles.answerWrapper}
        style={{ height: `${height}px` }}
      >
        <div
          ref={answerRef}
          className={`${styles.answerInner} ${
            !isOpen ? styles.answerHidden : ''
          }`}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  )
})

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])
  const [heights, setHeights] = useState<number[]>([])

  useEffect(() => {
    const newHeights = faqsData.map((_, i) =>
      openIndex === i && answerRefs.current[i]
        ? answerRefs.current[i]!.scrollHeight
        : 0
    )
    setHeights(newHeights)
  }, [openIndex])

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  return (
    <div className={styles.faqs} id='faqs'>
      <Title sub='' title='FAQs' description='Common questions answered.' />
      <div className={styles.faqsList}>
        {faqsData.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            height={heights[index] || 0}
            onToggle={() => toggleFAQ(index)}
            answerRef={(el) => {
              answerRefs.current[index] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}
