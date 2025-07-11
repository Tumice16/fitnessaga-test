import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitness Saga - Your Fitness Journey, One Step at a Time</title>
        <meta
          name="description"
          content="Track steps, join groups, and achieve your fitness goals with friends and colleagues. Fitness Saga is a free and beautifully designed step tracking app for iOS and Android."
        />
        <link rel="icon" href="/assets/images/fitness-saga.jpg" />
      </Head>

      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
