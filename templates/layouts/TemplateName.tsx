import { FC, ReactNode } from 'react'

import styles from './TemplateName.module.scss'

export interface TemplateNameProps {
  children: ReactNode
}

export const TemplateName: FC<TemplateNameProps> = ({ children }) => {
  return <div className={styles.templateName}>{children}</div>
}
