import { motion } from 'framer-motion'
import React from 'react'
import { SkillsTagSphere } from './SkillsSphere'

export const Skills = () => {
  return (
    <div className="mx-20 flex min-h-screen items-center justify-around">
      <div className="max-w-lg">
        {/* <p className="font-mono text-primary-600">Hi, my name is</p> */}
        <div className="text-6xl font-bold capitalize">
          <motion.h1
            animate={{ opacity: [0, 1], y: [20, 0] }}
            className="text-slate-200"
          >
            My Skills
          </motion.h1>
        </div>
        <motion.p
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-slate-400"
        >
          I'm a Full Stack Web Developer based in India. I specialize in agile
          projects. I build and ship my products fast through constant feedback
          loops.
        </motion.p>
      </div>

      <motion.div animate={{ opacity: [0, 1] }} transition={{ delay: 0.75 }}>
        <SkillsTagSphere />
      </motion.div>
    </div>
  )
}
