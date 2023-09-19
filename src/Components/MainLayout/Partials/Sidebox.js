import React, { Children } from 'react'
import { SideLIst } from './Styled';

export const Sidebox = ({sideBox}) => {
  return (
    <SideLIst>
      {sideBox}
    </SideLIst>
  )
}
