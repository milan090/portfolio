import { Transition, useAnimation, Variants } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useInView } from 'react-intersection-observer'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { EthModelsCanvas } from './EthModels'

const titleVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: 100 },
}

const transition: Transition = {
  delay: 0.25,
  duration: 1,
  ease: 'easeInOut',
}

export const Contact = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()
  const [copied, setCopied] = useState(false)
  const [notified, setNotified] = useState(false)

  useEffect(() => {
    if (inView && !notified) {
      control.start('visible')
      toast(
        <>
          Drop me a Hi on
          <a
            className="ml-1 text-blue-400 hover:underline"
            href="https://twitter.com/itsmilan090"
          >
            Twitter
          </a>
          👋
        </>
      )
      // Send the notification only once
      setNotified(true);
    }
  }, [control, inView])

  useEffect(() => {
    
    if (copied) {
      const timeout = setTimeout(() => {
        
        setCopied(false)
      }, 2500)

      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div
      className="relative flex flex-col items-center justify-center pt-10 pb-60"
      id="contact"
    >
      <div className="absolute h-full w-full">
        <EthModelsCanvas />
      </div>
      <div className="z-10 flex flex-col items-center justify-center">
        <div
          className="h-20 overflow-hidden text-center text-6xl font-bold capitalize"
          ref={ref}
          id="skills"
        >
          <motion.h1
            variants={titleVariants}
            animate={control}
            transition={transition}
            className="text-slate-200"
          >
            Get in touch!
          </motion.h1>
        </div>
        <div className="mt-4 flex rounded-lg border-2 border-slate-500 text-slate-200">
          <span className="border-r-2 border-slate-400 py-2 pr-2 pl-3">
            Email Me
          </span>
          <div className="py-2 pl-3">hello@milan090.me</div>
          <CopyToClipboard text="hello@milan090.me">
            <button
              className={`ml-10 ${
                copied ? 'text-primary-700' : 'text-slate-400'
              } pr-3 transition-colors duration-200 ease-in-out hover:text-slate-200`}
              onClick={() => {
                setCopied(true)
                toast.success('Copied Email')
              }}
            >
              <CopyIcon />
            </button>
          </CopyToClipboard>
        </div>
        <p className="mt-4 max-w-lg text-center text-slate-200">
          Wish to talk to me? Drop me a Hi on my{' '}
          <a
            className="text-blue-400 hover:underline"
            href="https://twitter.com/itsmilan090"
          >
            Twitter
          </a>
          <br /> You can find my other social links on top right corner :D
        </p>
      </div>
    </div>
  )
}

const CopyIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-copy"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
)
