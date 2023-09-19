import styled from "styled-components";
import { THEME } from "../theme";

export const WelcomeWrapper = styled.div`
    background:${THEME.white};
    height:600px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:${THEME.form_box_shadow};
    flex-direction:column;
    gap:30px;
    color:${THEME.grey};
    & h2{
        font-size:1rem;
    }
`

export const SvgWrapper = styled.div`
    width:220px;
    height:168px;
    position:relative;
    & img{
        position: absolute;
        inset: 0;
        width: 100%;
        margin: auto;
    }
`