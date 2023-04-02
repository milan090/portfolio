import { useAnimation, motion, Variants, Transition } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const titleVariants: Variants = {
  visible: { y: 0 },
  hidden: { y: 100 },
}

const transition: Transition = {
  delay: 0.25,
  duration: 1,
  ease: 'easeInOut',
}

const projectsContainerVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const projectVariants: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
}

const projectsData: ProjectCardProps[] = [
  {
    name: 'Stoicism',
    img: '/img/projects/stoicism.gif',
    description: 'Played around with ThreeJS and React to create this',
    link: 'https://stoicism.vercel.app/',
  },
  {
    name: 'Ency',
    img: '/img/projects/ency.png',
    description:
      'Ency is a virtual assistant developed with the concept of automating research and organizing projects and assignments',
    link: 'https://github.com/milan090/ency/',
  },
  {
    name: 'Physics Lab',
    img: '/img/projects/physics-lab.png',
    description:
      'Learning Physics by Visualising - the fastest, easiest, and retainable way of learning Physics',
    link: 'https://physics-lab.vercel.app/',
  },

  {
    name: 'ZeroToChad',
    img: '/img/projects/ztc.png',
    description:
      'Your all-in-one self improvement app. Become the best version of yourself!',
    link: 'http://zero-to-chad.vercel.app/',
  },
  {
    name: 'ElusidateAI',
    img: '/img/projects/elusidate.png',
    description: 'Summarize CSV data into meaningful charts and explanations',
    link: 'https://elusidate.app/',
  },
  {
    name: 'Describe-It',
    img: '/img/projects/describe-it.jpg',
    description:
      'Chrome Extension to quickly find meaning, pronunciation and information related to any word',
    link: 'https://chrome.google.com/webstore/detail/describe-it/mjjfbheclbnpfohkimmmkfeimdeilokf?hl=en',
  },
  {
    name: 'Shortify',
    img: '/img/projects/shortify.png',
    description: 'Quick and easy link shortner',
    link: 'https://shortify-git-main-milan090.vercel.app/',
  },
  {
    name: 'Twitter DAPP',
    img: '/img/projects/twitter-dapp.png',
    description: 'Decentralized Twitter build on Solidity and Rinkebey Testnet',
    link: 'http://twitter-dapp-five.vercel.app/',
  },
]

export const Projects = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  const projectsControl = useAnimation()
  const [projtectsRef, projectsInView] = useInView()

  useEffect(() => {
    if (inView) {
      projectsControl.start('visible')
    }
  }, [projectsControl, projectsInView])

  return (
    <div
      id="projects"
      className="mx-6 mt-10 mb-10 flex min-h-screen flex-col lg:mx-20"
      ref={ref}
    >
      <div
        className="h-20 overflow-hidden text-center text-4xl font-bold capitalize lg:text-6xl"
        id="skills"
      >
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate={control}
          transition={transition}
          className="text-slate-200"
        >
          Projects That I've Built
        </motion.h1>
      </div>
      <motion.div
        variants={projectsContainerVariants}
        initial="hidden"
        animate={projectsControl}
        ref={projtectsRef}
        className="mt-12 grid place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projectsData.map((props, i) => (
          <ProjectCard {...props} key={i} />
        ))}
      </motion.div>
    </div>
  )
}

type ProjectCardProps = {
  name: string
  img: string
  description: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  img,
  description,
  link,
}) => {
  return (
    <motion.div
      variants={projectVariants}
      className="w-full overflow-clip rounded-md shadow-2xl"
    >
      <div className="flex justify-between bg-slate-800 py-1 px-2 text-xs">
        <span className="font-bold uppercase tracking-wider text-slate-300">
          {name}
        </span>
        <div className="flex items-center gap-x-2">
          <span className="h-1 w-1 rounded-full bg-green-400 p-1" />
          <span className="h-1 w-1 rounded-full bg-yellow-400 p-1" />
          <span className="h-1 w-1 rounded-full bg-red-400 p-1" />
        </div>
      </div>
      <div className="group relative h-60 w-full cursor-pointer rounded-md">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-out group-hover:scale-125"
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center bg-slate-800 px-6 text-center opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
          {/* <h1 className="text-xl font-semibold">{name}</h1> */}
          <p>{description}</p>
          <a href={link} target="_blank">
            <button
              className="mt-4 rounded border-2 border-primary-600 px-4 py-2 transition-colors duration-200 ease-in-out hover:bg-primary-600 hover:text-slate-900"
              aria-label="Visit Website"
            >
              Visit Website
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
