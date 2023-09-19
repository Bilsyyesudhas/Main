/* eslint-disable */
import React, { Fragment } from 'react'
import { Radio as AntdRadio, Form } from 'antd'
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
const AntdRadioStyle = styled(AntdRadio)`
 &.ant-radio-wrapper span{
     font-family:  'Poppins', sans-serif;
    font-weight:800;
    font-size:18px;
 }
`
const CustomRadioButton = ({
    label,
    type,
    name,
    options,
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
            <AntdRadioStyle.Group
                {...rest}
                defaultValue={defaultValue}
                type={type}
                autoFocus={autoFocus}
                readOnly={readOnly}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                height={height}>
                {options.map((radio) => (
                    <AntdRadioStyle key={radio.value} value={radio.value}>{radio.label}</AntdRadioStyle>
                ))}
            </AntdRadioStyle.Group>
        </StyledItem>
    )
}

export default CustomRadioButton