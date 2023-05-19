import cn from 'classnames'

import styles from './ui.module.scss'

export const cx = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(' ')

type WithChildren<T = {}> = T & { children?: React.ReactNode }

interface BaseProps {
  as?: React.ElementType | React.FC
  cx?: string[]
  className?: string
}

export type TextVariants =
  | 'superH1'
  | 'titleH1'
  | 'titleH2'
  | 'titleLg'
  | 'titleBg'
  | 'titleMd'
  | 'titleSm'
  | 'bold'
  | 'body'
  | 'normal'
  | 'small'

interface TextProps extends BaseProps {
  variant?: TextVariants
  bold?: boolean
}

export function Base({
  as: Component = 'div',
  cx: _cx = [],
  className,
  ...props
}: BaseProps) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export function Text({
  variant = 'normal',
  bold = false,
  ...props
}: WithChildren<TextProps>) {
  return <Base cx={[styles[variant]]} {...props} />
}

export function TextPar({ ...props }) {
  return <Text as='p' variant='normal' {...props} />
}

export function Super({ ...props }) {
  return <Text as='h1' variant='superH1' {...props} />
}

export function H1({ ...props }) {
  return <Text as='h1' variant='titleH1' {...props} />
}

export function H2({ ...props }) {
  return <Text as='h2' variant='titleH2' {...props} />
}