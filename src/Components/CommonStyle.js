import styled from "styled-components"

export const IconHolder = styled.span`
    font-size:1.5rem;
    margin-right:10px;
    padding:5px 10px;
    border-radius:6px;
    cursor: pointer;
    transition: 0.5s;;

    &:hover{
        background:rgba(0,0,0,.3);
    }
`

export const CustomLabel = styled.span`
    text-transform: capitalize;
    letter-spacing: 0.01em;
    color: rgb(112, 112, 112) !important;
    font-size: 18px !important;
    font-weight: 600 !important;
`
