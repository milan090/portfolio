import { motion, Transition } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

const variants = {
  visible: {x: 0},
  hidden: {x:-208}
}
const transition: Transition = { delay: 4.5, duration: 1 }

export const Sidebar = () => {
  const router = useRouter()
  const isHome = router.asPath === '/'

  return (
    <motion.div
      initial={"hidden"}
      variants={variants}
      animate={isHome && "visible"}
      transition={isHome ? transition : {}}
      className="fixed flex h-full w-52 flex-col bg-slate-100"
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

            <h3 className="text-md mt-1 text-center text-slate-800">Milan</h3>
          </a>
        </Link>
        <p className="mt-2 text-xs text-slate-600">Full Stack Web Dev</p>
      </div>
      <div className="mt-32 mb-20 flex flex-col items-center gap-2 text-slate-800">
        {/* <NavLink href="/about">About</NavLink> */}
        <NavLink href="#skills">Skills</NavLink>
      </div>
    </motion.div>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactChild
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter()
  const isCurrentPath = useMemo(
    () => router.asPath.includes(href),
    [router.asPath]
  )

  return (
    <Link href={href} passHref>
      <a
        className={`w-11/12 rounded-lg py-4 text-center font-medium  ${
          isCurrentPath ? 'bg-slate-400 text-white' : 'hover:bg-slate-300'
        }  duration-150 ease-in-out`}
        style={{ transitionProperty: 'background-color' }}
      >
        {children}
      </a>
    </Link>
  )
}
