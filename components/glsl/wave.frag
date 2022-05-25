uniform float time;
varying vec2 vUv;
varying vec3 vPos;


const float duration = 20.0;
const float delay = 4.6;

#pragma glslify: hsl2rgb = require(glsl-hsl2rgb)
// 4.6-4.6/8
void main() {
  float now = clamp((time - delay) / duration, 0.0, 1.0);
  float opacity = (1.0 - length(vPos.xy / vec2(512.0))) * 0.2 * now;
  vec3 v = normalize(vPos);
  vec3 rgb = hsl2rgb(vec3(0.44, 0.8, 0.5 + (v.x + v.y + v.x) / 40.0 * 0.66));
  gl_FragColor = vec4(rgb, opacity);
}