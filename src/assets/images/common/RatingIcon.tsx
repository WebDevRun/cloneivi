import { FC } from 'react'

import { IconProps } from './DislikeIcon'

const RatingIcon: FC<IconProps> = ({ fill, ...props }) => {
  return (
    <svg
      {...props}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <title>rating_20__0</title>
      <path
        fill={fill}
        d="M16 22.667l7.111 4-1.333-8 5.778-5.778-8-0.889-3.556-7.556-3.556 7.556-8.444 0.889 6.222 5.778-1.333 8zM8.889 30.222q-0.889 0.444-2 0.222t-1.556-1.111 0-1.778l1.333-8-5.778-5.333q-0.889-0.889-0.889-1.778t0.667-1.778 1.556-0.889l8-0.889 3.556-7.556q0.444-0.889 1.333-1.111t1.778 0 1.333 1.111l3.556 7.556 8 0.889q0.889 0 1.556 0.889t0.667 1.778-0.889 1.778l-6.222 5.333 1.778 8q0 1.333-0.444 2t-1.333 0.889-1.778-0.222l-7.111-4z"
      ></path>
    </svg>
  )
}

export default RatingIcon
