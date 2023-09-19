import React from 'react'
import styled from 'styled-components'
import { THEME } from '../theme'

const StyledFormTitle = styled.h3`
    font-size:2rem;
    text-align:center;
    letter-spacing:1px;
    color:black;
    font-variant:small-caps;
    margin:20px;
`

export const FormTitle = ({title}) => {
  return (
    <StyledFormTitle>{title}</StyledFormTitle>
  )
}
