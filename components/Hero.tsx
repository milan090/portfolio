import React from 'react'
import { Agile } from './Agile'
import { motion, Transition, Variants } from 'framer-motion'
import { WaveCanvas } from './Wave'

import Typed from 'react-typed'

const titleVariants: Variants = {
  visible: {
    y: 0,
  },
  hidden: {
    y: 100,
  },
}

const titleTransition: Transition = {
  delay: 0.75,
  duration: 1.3,
  ease: 'easeInOut',
}

const contentVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: 20,
  },
}
// opacity: [0, 0.5, 0.75, 1], y: [20, 0]
export const Hero = () => {
  return (
    <div className="relative w-full" id="hero">
      <div className="absolute -z-30 h-full w-full">
        <WaveCanvas />
      </div>
      <div className="mx-32 flex min-h-screen pt-32">
        <motion.div className="max-w-lg" initial={false}>
          <p className="font-mono text-2xl text-primary-600">
            <Typed strings={['Hey there! I am']} typeSpeed={36} />
          </p>
          <div className="text-6xl font-bold capitalize">
            <div className="h-16 overflow-hidden ">
              <motion.h1
                initial="hidden"
                variants={titleVariants}
                animate="visible"
                transition={{ ...titleTransition }}
                className="text-slate-200"
              >
                Muhammed Milan
              </motion.h1>
            </div>
            <div className="h-16 overflow-hidden ">
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={titleTransition}
                className="text-slate-400"
              >
                I create things
              </motion.h1>
            </div>
            <div className="h-16 overflow-hidden ">
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                transition={titleTransition}
                className="text-slate-400"
              >
                for the web
              </motion.h1>
            </div>
          </div>
          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.5, duration: 1 }}
            className="mt-4 ml-1 text-slate-400"
          >
            I'm a Full Stack Web Developer based in India. I specialize in agile
            projects. I build and ship my products fast through constant
            feedback loops.
          </motion.p>
        </motion.div>

        <div>{/* <Agile /> */}</div>
      </div>
    </div>
  )
}
