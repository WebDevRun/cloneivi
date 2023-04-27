import { FC } from 'react'

export interface CommentThumbProps {
  type: 'up' | 'down'
  className?: string
}

const paths = {
  up: (
    <path d='M8.889 11.111q-0.889 0.889-0.889 2.222v12q0 0.889 0.444 1.333 1.333 1.778 4.444 2.222 5.333 1.333 13.333 0.889 1.333 0 2.222-1.778t1.778-4l1.333-5.333q0.444-2.667 0.444-4.889 0-3.556-4-4h-8q0.889-2.222 0.889-6t-4-3.778q-1.778 0-2.667 1.333t-1.333 2.667v0q-0.889 3.111-4 7.111zM17.333 4v0zM24.889 25.778q0 0.444-2.667 0l-6.222-0.444q-3.111 0-4-0.889v-11.111q3.556-4.444 4.889-8.444 0.444 0.889-0.444 3.556l-0.444 1.333q0 1.778 1.111 3.111t2.889 1.333h8q0 3.556-1.333 7.556-0.889 2.667-1.778 4.444v-0.444zM4 25.778v-13.778q0-0.889-0.667-1.556t-1.333-0.667-1.333 0.667-0.667 1.556v13.778q0 0.889 0.667 1.556t1.333 0.667 1.333-0.667 0.667-1.111v-0.444z'></path>
  ),
  down: (
    <path d='M23.111 20.889q0.889-0.889 0.889-2.222v-12q0-0.889-0.444-1.333-1.333-1.778-4.444-2.222-5.333-1.333-12.889-1.333-1.778 0-2.667 2t-1.333 4.222l-1.778 5.333q-0.444 2.667-0.444 4.889 0 4 4 4h8q-0.889 2.222-0.889 6t4 3.778q1.778 0 2.667-1.333t1.333-2.667v0q0.889-3.111 4-7.111zM7.111 5.778l2.667 0.444 6.222 0.444q3.111 0 4 0.889v11.111q-3.556 4.444-4.889 8.444-0.444-0.889 0.444-3.556l0.444-1.333q0-1.778-1.111-3.111t-2.889-1.333h-8q0-3.556 1.333-7.556 0.889-2.667 1.778-4.444zM28 5.778v14.222q0 0.889 0.667 1.333t1.333 0.444 1.333-0.444 0.667-1.333v-14.222q0-0.444-0.667-1.111t-1.333-0.667-1.333 0.667-0.667 1.556v-0.444z'></path>
  ),
}

export const CommentThumb: FC<CommentThumbProps> = ({ type, className }) => {
  return (
    <svg
      className={className}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      {paths[type]}
    </svg>
  )
}
