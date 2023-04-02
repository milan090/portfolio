import Image from 'next/image'
import { ReactNode, useEffect, useRef, useState } from 'react'
import { TagSphere } from 'react-tag-sphere'
import { shuffleArray } from '../utils/array'

const skillImageUrls = [
  'https://cdn.svgporn.com/logos/javascript.svg',
  'https://cdn.svgporn.com/logos/python.svg',
  'https://cdn.svgporn.com/logos/react.svg',
  'https://cdn.svgporn.com/logos/nodejs-icon.svg',
  '/img/prisma.svg',
  'https://cdn.svgporn.com/logos/docker-icon.svg',
  'https://cdn.svgporn.com/logos/figma.svg',
  'https://cdn.svgporn.com/logos/tailwindcss-icon.svg',
  'https://cdn.svgporn.com/logos/css-3.svg',
  'https://cdn.svgporn.com/logos/postgresql.svg',
  'https://cdn.svgporn.com/logos/firebase.svg',
  'https://cdn.svgporn.com/logos/supabase-icon.svg',
  'https://cdn.svgporn.com/logos/github-octocat.svg',
  'https://cdn.svgporn.com/logos/redux.svg',
  'https://cdn.svgporn.com/logos/django-icon.svg',
  'https://cdn.svgporn.com/logos/web3js.svg',
  '/img/t3.png',
  '/img/rust.svg'
]

const imageTags = skillImageUrls.map((url) => (
  <div className="w-6 lg:w-12">
    <Image src={url} width={'50px'} height={'50px'} />
  </div>
)) as ReactNode[]

const textTags = [
  'Chakra UI',
  'HTML5',
  'Linux',
  'GitHub',
  'ExpressJS',
  'Graphql',
  'ReactJS',
  'Digital Marketing',
  'AWS',
  'Solidity',
  'ThreeJS',
  'OpenGL',
  'GLSL',
].map((tag) => <p className='text-sm lg:text-lg'>{tag}</p>)

const tags = shuffleArray(imageTags.concat(textTags))

export const SkillsTagSphere: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const width = ref.current?.clientWidth as number
    setRadius(width / 2)
    console.log(width / 2);
  }, [ref.current?.clientWidth])

  return (
    <div className="mx-auto text-primary-500 max-w-full w-full flex ustify-center" ref={ref}>
      <TagSphere
        style={{
          fontFamily: 'sans-serif',
          fontSize: '1.25rem',
          fontWeight: 'bolder',
          width: '100%',
        }}
        // radius={radius}
        tags={tags}
        blurMultiplier={0.4}
        grayscale={false}
        fullHeight={true}
        fullWidth={true}
        keepRollingAfterMouseOut={true}
      />
    </div>
  )
}
