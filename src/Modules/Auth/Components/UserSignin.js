import React, { useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../../../Components/Flex'
import SignInForm from './SignInForm'
import { useNavigate } from 'react-router-dom'
import BgImg from '../../../Assets/Images/kk.jpg'
import { css } from 'styled-components'
import { THEME } from '../../../theme'

const media = {
  tablet: (...args) => css`
    @media (max-width: 720px) {
      ${css(...args)}
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `
};


export const Wrapper = styled(Flex)`
  height: 100vh;
  width: 100%;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  gap:20px;
  padding-top: 100px;

  @media ${THEME.TABLET}{
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;;
  }
`

const SignInCard = styled.div`
  background-color:rgba(255,255,255,0.2);
  backdrop-filter:blur(5px);
  padding: 40px 32px;
  border-radius:40px;
  max-width: 450px;
  width: 100%; 
  border: 2px solid #fff;
  height: max-content;
  gap:30px;
  ${media.mobile`
  max-width:100px
  `}
  ${media.tablet`
  max-width: 400px;
  `}
`

const SideText = styled.div`
align-items: flexStart;
font-size: 50px;
font-weight: 800;
letter-spacing:3px;
color:#f2f5f6;
text-align: center;
font-variant:small-caps;
${media.mobile`
font-size: 30px;
`}
${media.tablet`
font-size: 40px;
letter-spacing:1px;
`}
`
const UserSignin = ({ token, SignIn }) => {

  const navigate = useNavigate()

  const handleSignIn = data => {
    SignIn(data)
  }

  console.log(token, 'token')
  useEffect(() => {
    if (token) {
      // if()
      navigate('/')
    }
  }, [token])

  return (
    // <Wrapper column>
    //   <SignInCard>
    //       <SignInForm handleSignIn={handleSignIn} />
    //   </SignInCard>
    // </Wrapper>
    <Wrapper column>

      <SignInCard>
        <SignInForm handleSignIn={handleSignIn} />
      </SignInCard>

      <SideText>Cape Clouds
      </SideText>

    </Wrapper>
  )
}
export default UserSignin
