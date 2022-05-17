import Image from 'next/image'
import { ReactNode } from 'react'
import { TagSphere } from 'react-tag-sphere'
import { shuffleArray } from '../utils/array'

const skillImageUrls = [
  'https://cdn.svgporn.com/logos/javascript.svg',
  'https://cdn.svgporn.com/logos/python.svg',
  'https://cdn.svgporn.com/logos/react.svg',
  'https://cdn.svgporn.com/logos/nodejs-icon.svg',
  'https://cdn.svgporn.com/logos/prisma.svg',
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
]

const imageTags = skillImageUrls.map((url) => (
  <Image src={url} width={'50px'} height={'50px'} />
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
  'HardHat',
]

const tags = shuffleArray(imageTags.concat(textTags))

export const SkillsTagSphere: React.FC = () => {
  return (
    <div className="text-primary-500">
      <TagSphere
        style={{
          fontFamily: 'sans-serif',
          fontSize: '1.25rem',
          fontWeight: 'bolder',
        }}
        tags={tags}
        blurMultiplier={0.4}
        grayscale={false}
      />
    </div>
  )
}
