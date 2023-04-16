import { FC, ReactNode } from 'react'

import styles from './TemplateName.module.scss'

export interface TemplateNameProps {
  children: ReactNode
}

export const TemplateName: FC<TemplateNameProps> = ({ children }) => (
  <div className={styles.templateName}>{children}</div>
)
