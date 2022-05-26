import { motion, Transition } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

const variants = {
  visible: { x: 0 },
  hidden: { x: -208 },
}
const transition: Transition = { delay: 2, duration: 0.7, ease: 'easeIn' }

export const Sidebar = () => {
  return (
    <motion.div
      initial="hidden"
      variants={variants}
      animate={'visible'}
      transition={transition}
      className="fixed flex h-full w-52 flex-col bg-slate-800"
    >
      <div className="mt-5 flex flex-col items-center justify-center">
        <Link href="/">
          <a>
            <Image
              src="/img/Logo.jpg"
              width={100}
              height={100}
              className="rounded-xl"
            />

            <h3 className="text-md mt-1 text-center text-slate-100">Milan</h3>
          </a>
        </Link>
        <p className="mt-2 text-xs text-slate-200">Full Stack Web Dev</p>
      </div>
      <div className="mt-20 mb-20 flex flex-col items-center">
        {/* <NavLink href="/about">About</NavLink> */}
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </div>
    </motion.div>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()
  const [isCurrentPath, setIsCurrentPath] = useState(false)

  useEffect(() => {
    if (router.asPath.includes(href)) setIsCurrentPath(true)
    else setIsCurrentPath(false)
  }, [router.asPath])

  return (
    <Link href={href} passHref>
      <a
        className={`w-full py-4 text-center font-medium border-y border-y-slate-600  ${
          isCurrentPath ? "text-primary-700" : "text-slate-400 hover:text-slate-200"
        }  duration-150 ease-in-out`}
        style={{ transitionProperty: 'background-color' }}
      >
        {children}
      </a>
    </Link>
  )
}
