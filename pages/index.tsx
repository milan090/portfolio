import type { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { WaveCanvas } from '../components/Wave'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Skills />
    </>
  )
}

export default Home
