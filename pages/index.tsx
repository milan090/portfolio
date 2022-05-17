import type { NextPage } from 'next'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Skills />
    </>
  )
}

export default Home
