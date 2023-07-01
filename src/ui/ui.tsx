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
  | 'titleXL'
  | 'titleLg'
  | 'titleBg'
  | 'titleMd'
  | 'titleSm'
  | 'bold'
  | 'body'
  | 'normal'
  | 'small'

export function Base({
  as: Component = 'div',
  cx: _cx = [],
  className,
  ...props
}: BaseProps) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export type FlexVariants =
  | 'wrap'
  | 'start'
  | 'baseline'
  | 'columnStart'
  | 'column'
  | 'end'
  | 'stretch'
  | 'spaceBetween'
  | 'center'
  | 'centerNoWrap'
  | 'stretchCenter'

interface FlexProps extends BaseProps {
  variant?: FlexVariants
  wrap?: boolean
  alignItems?: FlexVariants
  gap?: 'gap0' | 'gap4' | 'gap8' | 'gap12' | 'gap16'
}

export function Flex({
  variant,
  wrap,
  alignItems,
  gap = 'gap12',
  cx: _cx = [],
  ...props
}: WithChildren<FlexProps>) {
  return (
    <Base
      cx={[
        cn(
          styles.flex,
          variant && styles[variant],
          wrap && styles.wrap,
          alignItems && styles[alignItems],
          styles[gap],
        ),
        ..._cx,
      ]}
      {...props}
    />
  )
}

interface TextProps extends BaseProps {
  variant?: TextVariants
  centerText?: boolean
  bold?: boolean
}

export function Text({
  variant = 'normal',
  centerText = false,
  bold = false,
  cx: _cx = [],
  ...props
}: WithChildren<TextProps>) {
  return (
    <Base
      cx={[
        cn(
          styles[variant],
          centerText && styles.centerText,
          bold && styles.bold,
        ),
        ..._cx,
      ]}
      {...props}
    />
  )
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

export function Decor({ variant = 'underline', ...props }) {
  return <Base cx={[styles[variant]]} {...props} />
}
