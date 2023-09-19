/* eslint-disable */
import React, { Fragment } from 'react'
import { Input as AntdInput, Form } from 'antd'
import styled from 'styled-components'
import { THEME } from '../../theme'
import Label from './Label'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
    /* align-items:center; */
  }
  border-radius: 8px;
  margin-bottom: 5px !important;
  & .ant-form-item-label {
    display:block;
    width:100%;
    text-align:start;
  }
  & .ant-form-item-label > label > span {
    font-size: 0.95rem;
    font-weight: 600 !important;
  }
`
const AntdInputStyle = styled(AntdInput)`
 font-family:  'Poppins', sans-serif;
  ::placeholder {
    font-size: 14px;
  }
  height: ${props => (props.height ? props.height : '40px')};
  border-radius: 8px;
  box-shadow: none;
  border-color: ${props => (props.error ? 'red' : '#e9e9e9')};
  :focus {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  :hover {
    border-color: #e9e9e9;
  }
  :not(.ant-input-affix-wrapper-disabled):hover {
    border-color: #e9e9e9 !important;
  }
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    border-right-width: 0px !important;
  }
  &.ant-input{
    font-weight:600;
  }
  &.ant-input[disabled] {
    color: ${THEME.black};
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }
`
const Input = ({
  label,
  type,
  name,
  rules,
  step,
  onChange,
  placeholder,
  required,
  autoFocus,
  disabled,
  readOnly,
  width,
  height,
  marginRight,
  labelStyle,
  defaultValue,
  minWidth,
  maxLength,
  value,
  optional,
  noStyle = undefined,
  ...rest
}) => {
  
  return (
    <StyledItem
      style={{
        width: width,
        marginRight: marginRight,
        minWidth:minWidth,
      }}
      rules={rules}
      noStyle={noStyle}
      name={name}
      colon={false}
      required={false}
      label={
        label && (
          <Fragment>
            <Label required={required} labelStyle={labelStyle}>
              {label} <span>{optional}</span>
            </Label>
          </Fragment>
        )
      }
    >
      <AntdInputStyle
        {...rest}
        defaultValue={defaultValue}
        type={type}
        autoFocus={autoFocus}
        readOnly={readOnly}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        height={height}
        step={step}
        maxLength={maxLength}
      />
    </StyledItem>
  )
}

export default Input