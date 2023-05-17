import { FC } from 'react'

interface CommonSvgProps {
  size: number
  icon: 'close'
  fill: string
}

export const CommonSvg: FC<CommonSvgProps> = ({ fill, size, icon }) => {
  return (
    <svg
      fill={fill}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 32 32'
    >
      {icon === 'close' && (
        <path d="M16 13.778l11.111-11.111q0.444-0.444 1.333-0.222t1.111 1.111-0.222 1.333l-11.111 11.111 11.111 11.111q0.444 0.444 0.222 1.333t-1.111 1.111-1.333-0.222l-11.111-11.111-11.111 11.111q-0.444 0.444-1.111 0.444t-1.111-0.444-0.444-1.111 0.444-1.111l11.111-11.111-11.111-11.111q-0.444-0.444-0.222-1.333t1.111-1.111 1.333 0.222z"></path>
      )}
    </svg>
  )
}
