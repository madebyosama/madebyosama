import { notFound } from 'next/navigation'
import caseStudies from '@/data/caseStudies'
import CaseStudyTemplate from '@/components/CaseStudy/CaseStudyTemplate'
import { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = caseStudies[slug]

  if (!data) {
    return { title: 'Not Found' }
  }

  return {
    title: `${data.title} - Case Study | Muhammad Osama`,
    description: data.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const data = caseStudies[slug]

  if (!data) {
    notFound()
  }

  return <CaseStudyTemplate data={data} />
}
