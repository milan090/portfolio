import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const Loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-slate-800 fixed" style={{zIndex: 10000}}>
      <div className="w-32">
        <LogoAnimated />
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: '#4BE8AD00',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: '#4BE8AD',
  },
}

export const LogoAnimated = () => (
  <div>
    <div className="stroke-primary-700">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="item"
      >
        <motion.path
          d="M0.963 90V0.399994H19.011L47.043 57.744L75.075 0.399994H92.995V90H80.323V16.784L46.915 83.6L13.507 16.784V90H0.963Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
    <div className="text-center">
      <h3 className="text-md mt-3 text-slate-100">Milan</h3>
      <p className="mt-4 text-xs text-slate-300">Full Stack Web Dev</p>
    </div>
  </div>
)
