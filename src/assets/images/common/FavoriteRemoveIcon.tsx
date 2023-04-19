import React, { FC } from 'react'

import { IconProps } from './DislikeIcon'

const FavoriteRemoveIcon: FC<IconProps> = ({ fill, ...props }) => {
  return (
    <svg
      {...props}
      fill={fill}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 32 32"
    >
      <title>favoriteRemove_20</title>
      <path d="M6.394 0h19.213q1.311 0 2.254 0.975t0.943 2.318v25.415q0 1.343-0.943 2.318t-2.254 0.975q-0.799 0-1.471-0.384l-6.681-4.252q-0.671-0.384-1.455-0.384t-1.455 0.384l-6.681 4.252q-1.183 0.639-2.446 0.224t-1.87-1.63q-0.352-0.703-0.352-1.503v-25.415q0-1.343 0.943-2.318t2.254-0.975z"></path>
    </svg>
  )
}

export default FavoriteRemoveIcon
