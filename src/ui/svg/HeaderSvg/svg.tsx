import { FC } from 'react'

interface SvgProps {
  name: 'play' | 'pause' | 'stop'
  fill: string
  size: number
}

const names = {
  play: (
    <path d='M16 32q-4.444 0-8-2.222t-5.778-5.778-2.222-8 2.222-8 5.778-5.778 8-2.222 8 2.222 5.778 5.778 2.222 8-2.222 8-5.778 5.778-8 2.222zM14.667 21.333v-4h-5.333q0 2.222 0.889 4.444 2.222-0.444 4.444-0.444zM14.667 24q-1.778 0-3.556 0.444l0.444 1.333q1.333 2.667 3.111 3.111v-4.889zM7.556 22.667q-0.889-2.667-0.889-5.333h-4q0.444 3.556 2.667 6.222zM7.111 25.778q0.889 1.333 2.667 1.778l-1.333-2.222zM17.333 24v4.889q1.778-0.444 3.111-3.111l0.444-1.333q-1.778-0.444-3.556-0.444zM21.778 21.778q0.889-2.222 0.889-4.444h-5.333v4q2.222 0 4.444 0.444zM23.556 25.333q-0.444 1.333-1.333 2.222 1.333-0.444 2.667-1.778zM26.667 24q2.222-3.111 2.667-6.667h-4q0 2.667-0.889 5.333zM9.333 14.667h5.333v-4q-2.222 0-4.444-0.444-0.889 2.222-0.889 4.444zM11.111 7.556q1.778 0.444 3.556 0.444v-4.889q-1.778 0.444-3.111 3.111zM17.333 14.667h5.333q0-2.222-0.889-4.444-2.222 0.444-4.444 0.444v4zM17.333 8q1.778 0 3.556-0.444l-0.444-1.333q-1.333-2.667-3.111-3.111v4.889zM25.333 14.667h4q-0.444-3.556-2.667-6.667l-2.222 1.333q0.889 2.667 0.889 5.333zM23.556 6.667q0.889 0 1.333-0.444-1.333-1.333-2.667-1.778zM9.778 4.444q-1.778 0.444-2.667 1.778l1.333 0.444zM2.667 14.667h4q0-2.667 0.889-5.333l-2.222-0.889q-2.222 2.667-2.667 6.222z'></path>
  ),
  pause: (
    <path d='M16 32q-4.444 0-8-2.222t-5.778-5.778-2.222-8 2.222-8 5.778-5.778 8-2.222 8 2.222 5.778 5.778 2.222 8-2.222 8-5.778 5.778-8 2.222zM14.667 21.333v-4h-5.333q0 2.222 0.889 4.444 2.222-0.444 4.444-0.444zM14.667 24q-1.778 0-3.556 0.444l0.444 1.333q1.333 2.667 3.111 3.111v-4.889zM7.556 22.667q-0.889-2.667-0.889-5.333h-4q0.444 3.556 2.667 6.222zM7.111 25.778q0.889 1.333 2.667 1.778l-1.333-2.222zM17.333 24v4.889q1.778-0.444 3.111-3.111l0.444-1.333q-1.778-0.444-3.556-0.444zM21.778 21.778q0.889-2.222 0.889-4.444h-5.333v4q2.222 0 4.444 0.444zM23.556 25.333q-0.444 1.333-1.333 2.222 1.333-0.444 2.667-1.778zM26.667 24q2.222-3.111 2.667-6.667h-4q0 2.667-0.889 5.333zM9.333 14.667h5.333v-4q-2.222 0-4.444-0.444-0.889 2.222-0.889 4.444zM11.111 7.556q1.778 0.444 3.556 0.444v-4.889q-1.778 0.444-3.111 3.111zM17.333 14.667h5.333q0-2.222-0.889-4.444-2.222 0.444-4.444 0.444v4zM17.333 8q1.778 0 3.556-0.444l-0.444-1.333q-1.333-2.667-3.111-3.111v4.889zM25.333 14.667h4q-0.444-3.556-2.667-6.667l-2.222 1.333q0.889 2.667 0.889 5.333zM23.556 6.667q0.889 0 1.333-0.444-1.333-1.333-2.667-1.778zM9.778 4.444q-1.778 0.444-2.667 1.778l1.333 0.444zM2.667 14.667h4q0-2.667 0.889-5.333l-2.222-0.889q-2.222 2.667-2.667 6.222z'></path>
  ),
  stop: (
    <path d='M16 32q-4.444 0-8-2.222t-5.778-5.778-2.222-8 2.222-8 5.778-5.778 8-2.222 8 2.222 5.778 5.778 2.222 8-2.222 8-5.778 5.778-8 2.222zM14.667 21.333v-4h-5.333q0 2.222 0.889 4.444 2.222-0.444 4.444-0.444zM14.667 24q-1.778 0-3.556 0.444l0.444 1.333q1.333 2.667 3.111 3.111v-4.889zM7.556 22.667q-0.889-2.667-0.889-5.333h-4q0.444 3.556 2.667 6.222zM7.111 25.778q0.889 1.333 2.667 1.778l-1.333-2.222zM17.333 24v4.889q1.778-0.444 3.111-3.111l0.444-1.333q-1.778-0.444-3.556-0.444zM21.778 21.778q0.889-2.222 0.889-4.444h-5.333v4q2.222 0 4.444 0.444zM23.556 25.333q-0.444 1.333-1.333 2.222 1.333-0.444 2.667-1.778zM26.667 24q2.222-3.111 2.667-6.667h-4q0 2.667-0.889 5.333zM9.333 14.667h5.333v-4q-2.222 0-4.444-0.444-0.889 2.222-0.889 4.444zM11.111 7.556q1.778 0.444 3.556 0.444v-4.889q-1.778 0.444-3.111 3.111zM17.333 14.667h5.333q0-2.222-0.889-4.444-2.222 0.444-4.444 0.444v4zM17.333 8q1.778 0 3.556-0.444l-0.444-1.333q-1.333-2.667-3.111-3.111v4.889zM25.333 14.667h4q-0.444-3.556-2.667-6.667l-2.222 1.333q0.889 2.667 0.889 5.333zM23.556 6.667q0.889 0 1.333-0.444-1.333-1.333-2.667-1.778zM9.778 4.444q-1.778 0.444-2.667 1.778l1.333 0.444zM2.667 14.667h4q0-2.667 0.889-5.333l-2.222-0.889q-2.222 2.667-2.667 6.222z'></path>
  ),
}

export const Svg: FC<SvgProps> = ({ name, fill, size }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={fill}
      viewBox={`0 0 ${size} ${size}`}
    >
      {names[name]}
    </svg>
  )
}
