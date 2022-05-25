import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import React, { useMemo, useRef } from 'react'
import glsl from "glslify";
import frag from './glsl/wave.frag';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });
export const WaveCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], aspect: 1016/980, fov: 70, near: 0.1, far: 90000,  }} >
      <Wave />
    </Canvas>
  )
}

// const fragmentShader = glsl(/*glsl */`
//   uniform float time;
//   varying vec2 vUv;
//   varying vec3 vPos;


//   const float duration = 5.0;
//   const float delay = 2.0;

//   #pragma glslify: hsl2rgb = require(glsl-hsl2rgb)

//   void main() {
//     float now = clamp((time - delay) / duration, 0.0, 1.0);
//     float opacity = (1.0 - length(vPos.xy / vec2(512.0))) * 0.6 * now;
//     vec3 v = normalize(vPos);
//     vec3 rgb = hsl2rgb(vec3(0.44, 0.8, 0.5 + (v.x + v.y + v.x) / 40.0 * 0.66));
//     gl_FragColor = vec4(rgb, opacity);
//   }
  
// `)

const vertexShader = glsl(/*glsl */`
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPos;


  void main() {
    vUv = uv;
    vec3 pos = position;

    float sin1 = sin((pos.x + pos.y) * 0.2 + time * 0.5);
    float sin2 = sin((pos.x - pos.y) * 0.4 + time * 2.0);
    float sin3 = sin((pos.x + pos.y) * 0.8 + time);

    pos.z = sin1 * 50.0 + sin2 + 10.0 + sin3 * 8.0;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    
  }
`)

const Wave = () => {
  const plane = useRef<any>()

  const uniforms = useMemo(() => ({
    time: { value: 0.0 }
  }), [])

  useFrame((state, delta) => {
    if (plane.current.material.uniforms) {
      plane.current.material.uniforms.time.value = state.clock.getElapsedTime()
    }
  })
  return (
    <>
    
    <mesh ref={plane} position={[0, -140, 0]} rotation={[-Math.PI/2, 0, 0]} >
      <planeBufferGeometry args={[1024, 1024, 32, 32]}  />
      <shaderMaterial wireframe={true} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={frag}  />
    </mesh>
    {/* <orbitControls attach={"orbitControls"}  args={[camera, gl.domElement]} />; */}
    </>
  )
}
