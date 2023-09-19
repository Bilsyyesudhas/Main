import React from 'react'
import { Mainbox } from './Partials/MainBox'
import { Sidebox } from './Partials/Sidebox'
import { ContainerWrapper } from './Partials/Styled'

export const MainLayout = ({ sideBox, secondbox }) => {
  return (

    <ContainerWrapper>
      <Mainbox secondbox={secondbox} />
      <Sidebox sideBox={sideBox} />
    </ContainerWrapper>
  )
}
