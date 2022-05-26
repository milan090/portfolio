import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { Variants } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { clamp, degToRad } from 'three/src/math/MathUtils'

export const EthModelsCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 20],

        fov: 70,
        near: 0.1,
        far: 1000,
      }}
      className="z-10"
    >
      <directionalLight intensity={1} position={[10, 10, 10]} />
      <ambientLight intensity={0.1} position={[10, 0, 10]} />
      <ambientLight intensity={0.5} position={[-10, 0, 10]} color="#00d8d8" />
      <EthModels />
    </Canvas>
  )
}

const EthModels = () => {
  const ref = useRef<any>()
  const [isHovered, setIsHovered] = useState(false)
  const speed = 55
  const zRotation = degToRad(10)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 2
      ref.current.rotation.y += (delta * Math.PI) / 2

      if (isHovered) {
        ref.current.rotation.z = clamp(
          ref.current.rotation.z + delta * -zRotation,
          -zRotation,
          zRotation
        )
        ref.current.position.x = clamp(
          ref.current.position.x + delta * speed,
          -20,
          20
        )
      } else {
        // ref.current.rotation.z = clamp(
        //   ref.current.rotation.z + delta * zRotation,
        //   zRotation,
        //   -zRotation
        // )
        ref.current.position.x = clamp(
          ref.current.position.x + delta * -speed,
          -20,
          20
        )
      }
    }
  })

  useEffect(() => {
    console.log(isHovered)
  }, [isHovered])

  return (
    <>
      <group position={[0, 2, 0]}>
        <motion.group
          ref={ref}
          position={[-30, 0, 0]}
          onClick={() => {
            console.log('test')
            setIsHovered((h) => !h)
          }}
          whileHover={{ scale: 1.1 }}
        >
          <mesh>
            <coneGeometry args={[3, 7, 4, 1]} />
            <meshStandardMaterial flatShading={true} color="#4ebfbf" />
          </mesh>
          <mesh rotation={[Math.PI, 0, 0]} position={[0, -6, 0]}>
            <coneGeometry args={[3, 4, 4, 1]} />
            <motion.meshStandardMaterial flatShading={true} color="#4ebfbf" />
          </mesh>
        </motion.group>
      </group>
    </>
  )
}
