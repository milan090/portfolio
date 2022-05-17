import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Sidebar = () => {
  return (
    <div className="absolute flex h-full w-52 flex-col justify-between bg-slate-100">
      <div className="mt-5 flex flex-col items-center justify-center">
        <Image
          src="/img/Logo.jpg"
          width={100}
          height={100}
          className="rounded-xl"
        />

        <h3 className="text-md mt-1 text-slate-800">Milan</h3>
        <p className="mt-2 text-xs text-slate-600">Full Stack Web Dev</p>
      </div>
      <div className="mt-10 mb-20 flex flex-col items-center gap-2 text-slate-800">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/skills">Skills</NavLink>
      </div>
      div
    </div>
  )
}

type NavLinkProps = {
  href: string
  children: React.ReactChild
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="w-11/12 rounded-lg py-4 text-center hover:bg-slate-300">
        {children}
      </a>
    </Link>
  )
}
