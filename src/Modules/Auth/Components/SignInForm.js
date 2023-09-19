import React from 'react'
import Button from '../../../Components/Form/Button'
import styled from 'styled-components'
import { Form, Input } from 'antd'
import Flex from '../../../Components/Flex'

const InputWrapper = styled.div`
  padding-bottom: 25px;

`
const Header = styled.div`
  color:#fff;
  margin-bottom:20px;
`

const SignInForm = ({ handleSignIn }) => {
  const onFinish = values => {
    handleSignIn(values)
  }


  console.log('SigninForm')

  return (

    <Form
      onFinish={onFinish}
      initialValues={{
        remember_me: false
      }}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}>
      <Flex center>
        <Header>
          <h1 style={{ fontSize: '30px', }}>Login</h1>
        </Header>
      </Flex>
      <InputWrapper style={{ padding: '5px 20px' }}>
        <Form.Item
          style={{ marginBottom: '0' }}
          name="username"
          rules={[
            { required: true, message: 'Please enter your username' },
          ]}
        >
          <Input size='large' placeholder="Username" style={{ borderRadius: '8px' }} />
        </Form.Item>
      </InputWrapper>
      <br />

      <InputWrapper style={{ padding: '5px 20px' }}>
        <Form.Item
          style={{ marginBottom: '0' }}
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter a password',
            },
          ]}
        >
          <Input.Password size='large' placeholder="Password" style={{ borderRadius: '8px' }} />
        </Form.Item>
      </InputWrapper>

      <Form.Item style={{ padding: '5px 20px' }}>
        <Flex center gap={'20px'} style={{ margin: '20px 0px' }}>
          <Button.Primary text={'LOGIN'} htmlType="submit" />
          <Button.Danger text={'CANCEL'} htmlType="reset" />
        </Flex>
      </Form.Item>

    </Form>

  )
}

export default SignInForm
