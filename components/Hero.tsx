import React from 'react'
import { Agile } from './Agile'
import { motion, Variant, Variants } from 'framer-motion'

export const Hero = () => {
  return (
    <div className="mx-20 flex min-h-screen items-center justify-around">
      <motion.div className="max-w-lg">
        <motion.p
          animate={{
            opacity: [0, 1],
          }}
          className="font-mono text-2xl text-primary-600"
        >
          Hi,
          <motion.span
            animate={{
              opacity: [0, 1],
              paddingLeft: [20, 0],
            }}
            transition={{
              delay: 0.75,
            }}
          >
            {' '}
            my name is
          </motion.span>
        </motion.p>
        <motion.div className="text-6xl font-bold capitalize">
          <motion.h1
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 1.25 }}
            className="text-slate-200"
          >
            Muhammed Milan
          </motion.h1>
          <motion.h1
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 2 }}
            className="text-slate-400"
          >
            I create things
          </motion.h1>
          <motion.h1
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ delay: 2.75 }}
            className="text-slate-400"
          >
            for the web
          </motion.h1>
        </motion.div>
        <motion.p
          animate={{ opacity: [0, 0.5, 0.75, 1], y: [20, 0] }}
          transition={{ delay: 3.5 }}
          className="mt-4 ml-1 text-slate-400"
        >
          I'm a Full Stack Web Developer based in India. I specialize in agile
          projects. I build and ship my products fast through constant feedback
          loops.
        </motion.p>
      </motion.div>

      <div>
        <Agile />
      </div>
    </div>
  )
}
