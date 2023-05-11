import { FC, MouseEventHandler } from 'react'

export interface IconProps {
  fill: string
  onClick?: MouseEventHandler
}

const DislikeIcon: FC<IconProps> = ({ fill, ...props }) => {
  return (
    <svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <title>dislike_20__0</title>
      <path
        fill={fill}
        d="M16 30.222q4 0 7.556-2.222t5.333-5.778 1.333-7.778-3.111-7.333l4.444-4.444q0.444-0.444 0.222-1.333t-1.111-1.111-1.333 0.222l-4.444 4.444q-2.667-2.222-6.222-2.889t-6.889 0.222-6 3.556-3.556 6-0.222 6.889 2.889 6.222l-4.444 4.444q-0.444 0.444-0.444 1.111t0.444 1.111 1.111 0.444 1.111-0.444l4.444-4.444q1.778 1.778 4 2.444t4.889 0.667zM9.333 24.889l15.556-15.556q1.778 2.222 2.222 4.889t-0.444 5.111-2.889 4.444-4.444 2.889-5.111 0.444-4.889-2.222zM7.111 22.667q-1.778-2.222-2.222-4.889t0.444-5.111 2.889-4.444 4.444-2.889 5.111-0.444 4.889 2.222z"
      ></path>
    </svg>
  )
}

export default DislikeIcon
