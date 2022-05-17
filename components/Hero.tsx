import React from 'react'
import { Agile } from './Agile'
import { SkillsTagSphere } from './SkillsSphere'

export const Hero = () => {
  return (
    <div className="mx-20 flex min-h-screen items-center justify-around">
      <div className="max-w-lg">
        <p className="font-mono text-primary-600">Hi, my name is</p>
        <div className="text-6xl font-bold capitalize">
          <h1 className="text-slate-200">Muhammed Milan</h1>
          <h1 className="text-slate-400">
            I create things <br /> for the web
          </h1>
        </div>
        <p className="mt-4 text-slate-400">
          I'm a Full Stack Web Developer based in India. I specialize in agile
          projects. I build and ship my products fast through constant feedback
          loops.
        </p>
      </div>

      <div>
        <Agile />
      </div>
    </div>
  )
}
