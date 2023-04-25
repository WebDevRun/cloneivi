import { FC } from 'react'

import styles from './TemplateName.module.scss'

export interface TemplateNameProps {}

export const TemplateName: FC<TemplateNameProps> = () => {
  return <div className={styles.templateName}>TemplateName</div>
}
