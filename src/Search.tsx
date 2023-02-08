import Placeholder from '@sone-dao/sone-react-placeholder'
import { Page } from '@sone-dao/tone-react-containers'
import React from 'react'
import styles from './Search.module.scss'

export interface IRegistrationProps {}

const Registration: React.FC<IRegistrationProps> = ({}) => {
  return (
    <Page className={styles.page}>
      <Placeholder display="Component: Search" height="100%" />
    </Page>
  )
}

export default Registration
