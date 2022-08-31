import {
  motion,
  Transition,
  useAnimation,
  Variant,
  Variants,
} from 'framer-motion'
import React, { useEffect } from 'react'
import { SkillsTagSphere } from './SkillsSphere'
import { useInView } from 'react-intersection-observer'

const titleVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: 100 },
}

const contentVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: -300 },
}

const transition: Transition = { delay: 0, duration: 1.33, ease: 'easeInOut' }

const sphereVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

export const Skills = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <div
      className="mx-4 grid min-h-screen items-center gap-x-5 lg:mx-20 lg:grid-cols-2 mt-10 md:mt-0"
      id="skills"
      ref={ref}
    >
      <div className="mx-auto max-w-xl">
        {/* <p className="font-mono text-primary-600">Hi, my name is</p> */}

        <div className="h-20 overflow-hidden text-6xl font-bold capitalize">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate={control}
            transition={transition}
            className="text-primary-500"
          >
            My Skills
          </motion.h1>
        </div>
        <div className="mt-4 overflow-hidden">
          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate={control}
            transition={transition}
            className="text-slate-400 text-xl"
          >
            I am a fast learner and always upto date with latest technology.
            Even though I do this, I make sure to choose my tech wisely. Instead
            of running behind everything that's shiny, I carefully consider how
            it would save time and resources for me and my team. <br />
            <br />I am skilled at making user friendly, responsive and fast
            websites with tools like NextJS and NuxtJS.
          </motion.p>
        </div>
      </div>

      <motion.div
        animate={control}
        variants={sphereVariants}
        initial="hidden"
        transition={{ delay: 0.75, duration: 1.5 }}
      >
        <SkillsTagSphere />
      </motion.div>
    </div>
  )
}
