import * as React from 'react'
import { motion, Variants } from 'framer-motion'

const steps = [
  {
    name: 'Plan',
  },
  {
    name: 'Design',
  },
  {
    name: 'Develop',
  },
  {
    name: 'Test',
  },
  {
    name: 'Feedback',
  },
  {
    name: 'Repeat',
  },
]

const container: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      delayChildren: 4,
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export const Agile = () => (
  <motion.ul
    className="grid grid-cols-3 gap-y-10 gap-x-8"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {steps.map((step, index) => (
      <Card key={index} {...step} />
    ))}
  </motion.ul>
)

type CardProps = {
  name: string
}

const Card: React.FC<CardProps> = ({ name }) => {
  return (
    <motion.li
      className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-3xl bg-slate-100"
      variants={item}
      whileHover={{ scale: 1.1 }}
    >
      <h4 className="text-lg font-medium text-slate-900">{name}</h4>
    </motion.li>
  )
}
