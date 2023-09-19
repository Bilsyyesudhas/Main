import styled from "styled-components";
import { THEME } from "../../theme";

export const DCardWrapper  = styled.div`
    width:100%;
    padding:15px;
    background:${THEME.white};
    border-radius:20px 20px 8px 8px;
    box-shadow:${THEME.form_box_shadow};
    cursor: pointer;
    transition: 0.5s;
    position:relative;
    border-bottom:5px solid ${props=>props.bgColor};

    &:hover{
        box-shadow:${THEME.formHover_box_shadow};
        transform:translateY(-5px);
        /* background:${props=>props.bgSecondaryColor}; */
    }
`

export const IconHolder = styled.div`
    width:70px;
    height:70px;
    border-radius:10px;
    background:${props=>props.bgColor || 'red'};
    position:absolute;
    top:-15px;
    left:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:2rem;
    color:${THEME.white};
`

export const DCardContentHolder = styled.div`
    /* background:green; */
    margin-top:40px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    /* background:${props=>props.bgColor}; */
    flex-direction:column;
    padding: 20px 2px;
`

export const DCardHeading = styled.h3`
    color:${props=>props.color};
    font-size:1rem;
    font-weight:700;
    text-transform:capitalize;
    font-variant:small-caps;
    transition:0.3s;

    @media ${THEME.LAPTOP}{
        font-size:1.2rem;
    }
`

export const DCardNumber = styled.h4`
    color:${props=>props.color};
    font-size:2rem;
    margin-top:20px;
`