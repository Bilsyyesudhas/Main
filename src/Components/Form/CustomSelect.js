// import { Select, Button } from 'antd';
import { Fragment, useState } from 'react';
import { Select as AntdSelect, Form } from 'antd'
import styled from 'styled-components'
import { THEME } from '../../theme'
import Label from './Label'
import Button from './Button';
import { PlusCircleOutlined } from '@ant-design/icons'

const { Item } = Form
const { Option } = AntdSelect;

const StyledItem = styled(Item)`
  > div {
    width: 100%;
    text-align: left;
    /* align-items:center; */
  }
  border-radius: 8px;
  margin-bottom: -5px !important;
  & .ant-form-item-label {
    display:block;
    width:100%;
    text-align:start;
  }
  & .ant-form-item-label > label > span {
   
    font-size: 0.95rem;
    font-weight: 500 !important;
  }
`
const AntdSelectStyle = styled(AntdSelect)`
margin-bottom:5px;
font-family:  'Poppins', sans-serif;
font-weight:600;
::placeholder {
  font-size: 16px;
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
& .ant-select-selector {
    height:100% !important;
    & input{
    height:100% !important;
    }
  }
  &.ant-input[disabled] {
    color: ${THEME.black};
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }
  & .ant-select-selection-item{
    margin:auto;
    font-size: 1rem;
    font-weight: 600;
  }
  & .ant-select-selection-placeholder { 
    margin:auto;
  }
`
export const CustomSelect = ({
    initialValue,
    label,
    type,
    name,
    buttonLabel,
    onButtonClick,
    rules,
    onChange,
    placeholder,
    required,
    disabled,
    options,
    width,
    minWidth,
    height,
    onSearch,
    searchText,
    notFoundContent,
    value,
    showSearch,
    marginRight,
    labelStyle,
    defaultValue,
    optional,
    noStyle = undefined,
    ...rest
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleButtonClick = () => {
        setIsDropdownOpen(false);
        onButtonClick();
    };

    return (
        <StyledItem
            style={{
                width: width,
                marginRight: marginRight,
                minWidth: minWidth
            }}
            rules={rules}
            noStyle={noStyle}
            name={name}
            colon={false}
            required={false}
            initialValue={initialValue}
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
            <AntdSelectStyle
                placeholder={placeholder}
                showSearch={showSearch}
                value={searchText}
                onChange={onChange}
                onSearch={onSearch}
                defaultValue={defaultValue}
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                dropdownRender={(menu) => (
                    <div>
                        <div style={{ padding: '8px 12px' }}>
                            <Button style={{ border: `1px solid ${THEME.PRIMARY}`, width: '100%', color: `${THEME.PRIMARY}`, }} onClick={handleButtonClick}>
                                <PlusCircleOutlined /> {buttonLabel}
                            </Button>
                        </div>
                        {menu}
                    </div>
                )}
                open={isDropdownOpen}
                onDropdownVisibleChange={(open) => setIsDropdownOpen(open)}
                {...rest}
            >
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </AntdSelectStyle>
        </StyledItem>
    )
}
