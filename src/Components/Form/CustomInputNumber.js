/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Label from './Label'
import styled from 'styled-components'
import { THEME } from '../../theme'
import { InputNumber as AntdInputNumber, Form } from 'antd'

const { Item } = Form

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
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

export const AntdInputNumberStyle = styled(AntdInputNumber)`
  /* border-radius: 8px !important;
  padding-top: 5px !important; */
  width: 100%;
  font-family:  'Poppins', sans-serif;
  & .ant-input-number-input:placeholder-shown {
    font-size:14px;
    text-align:${props=>props.placed ? 'center' : 'start'};
  }
  ::placeholder {
    font-size: 22px;
    color:red;
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

  .ant-input-number-prefix {
    color: #dbdbdb;
  }

  .ant-input-number-input {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-align:${props=>props.placed || 'start'};
    height:100%;
    color: ${THEME.HEADING};
  }

  .ant-input-number-handler-wrap {
    opacity: unset;
    border-radius: 0 8px 8px 0;
    padding-top: 4px;
  }
  .ant-input-number-input-wrap{
    height:100%;
  }

  .ant-input-number-handler {
    width: 20px;
    height: 12px;
    color: #989898;
  }

  .ant-input-number-handler-up,
  .ant-input-number-handler-down {
    background: #ededed;
    margin-bottom: 2px;
    border-radius: 3px;
    margin-top: 2px;
  }

  .ant-input-number-handler-up:hover,
  .ant-input-number-handler-down:hover {
    height: 12px !important;
  }
  &.ant-input-number:hover .ant-input-number-handler-wrap{
    opacity: 0 !important;
  }

  &.ant-input-number:focus .ant-input-number-handler-wrap{
    opacity: 0 !important;
  }
  .ant-input-number-handler-wrap{
    opacity: 0;
  }
  .ant-input-number-focused .ant-input-number-handler-wrap {
    opacity: 0 !important;
  }
`

export const CustomInputNumber = ({
    label,
    type,
    name,
    rules,
    step,
    onChange,
    inputRef,
    placeholder,
    required,
    autoFocus,
    disabled,
    readOnly,
    maxlength,
    width,
    precision,
    height,
    marginRight,
    labelStyle,
    defaultValue,
    placed,
    minWidth,
    optional,
    noStyle = undefined,
    ...rest
}) => {

    // console.log(setvalue,'setvalue')
    return (
        <StyledItem
            style={{
                width: width,
                marginRight: marginRight,
                minWidth: minWidth,
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
            <AntdInputNumberStyle
                {...rest}
                ref={inputRef}
                defaultValue={defaultValue}
                placed={placed}
                maxLength={maxlength}
                type={type}
                autoFocus={autoFocus}
                readOnly={readOnly}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                height={height}
                step={step}
                // addonBefore={addonBefore}
                // step={0.01}
                precision={precision}
            />
        </StyledItem>
    )
}

