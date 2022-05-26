import type { NextPage } from 'next'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { WaveCanvas } from '../components/Wave'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
