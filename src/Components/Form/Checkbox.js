/* eslint-disable */
import React from 'react'
import styled from 'styled-components'
import { Checkbox as AntdCheckbox } from 'antd'

const StyledCheckbox = styled(AntdCheckbox)`
  & .ant-checkbox .ant-checkbox-inner {
    width: ${props => (props.Big ? '25px' : '18px')};
    height: ${props => (props.Big ? '25px' : '18px')};
    /* background: ${props => props.color || 'black'}; */

    &:hover {
      /* background: ${props => props.color || 'black'}; */
      /* border-color: ${props => props.color || 'black'}; */
    }
  }
  & .ant-checkbox .ant-checkbox-inner:after {
    inset-inline-start: 25%;
  }
  &.ant-checkbox-wrapper {
    align-items: center;
    height: 100%;
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    /* background-color: ${props => props.color || 'black'}; */
    /* border-color: ${props => props.color || 'black'}; */
  }
  .ant-checkbox + span {
    padding-left: 12px;
  }
`
const LabelWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  /* color: #202020; */
`

const Checkbox = ({ onChange, label, value, color, Big, ...rest }) => {
  return (
    <StyledCheckbox
      {...rest}
      onChange={onChange}
      Big={Big}
      value={value}
      color={color}
    >
      <LabelWrapper>{label}</LabelWrapper>
    </StyledCheckbox>
  )
}
export default Checkbox
