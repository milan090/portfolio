import * as React from 'react'
import { motion } from 'framer-motion'

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

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.075,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  hover: {
    // y: -5,
    // scale: 1.2,
    borderRadius: '100%',
    transition: {
      duration: 0.2,
      // staggerChildren: 0.5,
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
  const [hover, setHover] = React.useState(false)
  return (
    <motion.li
      className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-3xl bg-slate-100"
      variants={item}
      animate={hover ? 'hover' : 'visible'}
      onHoverEnd={(e) => setHover(false)}
      onHoverStart={() => setHover(true)}
    >
      <h4 className="text-lg font-medium text-slate-900">{name}</h4>
    </motion.li>
  )
}
