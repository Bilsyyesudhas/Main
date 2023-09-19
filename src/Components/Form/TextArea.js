import React from 'react'
import { Input, Form } from 'antd'
import Label from './Label'
import styled from 'styled-components'

const { TextArea } = Input

const StyledItem = styled(Form.Item)`
  > div {
    text-align: left;
  }
  .ant-input{
    font-family: 'Poppins', sans-serif;
    font-size:1rem;
    font-weight:600;
  }
  & .ant-form-item-label {
    display:block;
    width:100%;
    text-align:start;
  }
  .ant-input:focus,
  .ant-input-focused {
    border-color: #e9e9e9;
    box-shadow: none;
  }
  .ant-input:hover {
    border-color: #e9e9e9;
  }
  & .ant-form-item-label > label > span {
    font-size: 1rem;
    font-weight:600;
  }
`

export const TextAreas = ({
  name,
  cols,
  type = 'text',
  placeholder,
  label,
  rules,
  required,
  rows = 4,
  ...rest
}) => {
  return (
    <StyledItem
      colon={false}
      required={false} // Hides red asterisk
      label={
        label && (
          <Label required={required} showLock={rest.showLock}>
            {label}
          </Label>
        )
      }
      rules={rules}
      name={name}
      {...rest}
    >
      <TextArea
      cols={cols}
        {...rest}
        type={type}
        rows={rows}
        placeholder={placeholder}
        style={{ resize: 'none' }}
      />
    </StyledItem>
  )
}

