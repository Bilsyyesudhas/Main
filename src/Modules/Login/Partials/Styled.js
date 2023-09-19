import styled from "styled-components";

export const LoginWrapper = styled.div`
    width:100%;
    height:100vh;
    /* background-image: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114)); */
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;

    & img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }
`   

export const LoginFormWrapper = styled.div`
    position:relative;
    padding:60px;
    background:rgba(255,255,255,0.25);
    backdrop-filter:blur(5px);
    border:1px solid #fff;
    border-bottom:1px solid rgba(255,255,255,.5);
    border-right:1px solid rgba(255,255,255,.5);
    border-radius:20px;
    width:500px;
    max-width:500px;
`

export const LoginTitle =styled.h4`
    font-size:4rem;
    text-transform:capitalize;
    font-variant:small-caps;
    color:#fff;
    -webkit-text-stroke: 2px red;
    -webkit-text-fill-color: white;
    text-align:center;
`