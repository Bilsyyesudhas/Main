import { Input, } from 'antd'
import styled, { css } from 'styled-components'
import { THEME } from '../theme';

export const LogoName = styled.h2`
    font-size:1.2rem;
    text-transform:capitalize;
    font-variant:small-caps;
    flex:auto;
    text-align:center;
    font-weight:600;
    color: white;
    @media ${THEME.MOBILEL} {
        font-size:2rem;
    }
`

export const ToggleBtn = styled.span`
    color: ${THEME.black};
    font-size: 1.5rem;
    padding: 10px 16px;
    background-color: white;
    border-radius:10px;
    cursor: pointer;
    border:1px solid ${THEME.grey};
    transition:0.4s;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const SideNavList = styled.h3`
    text-transform:capitalize;
    font-variant:small-caps;
    flex:auto;
    font-size:1.1rem;
    text-align:left;    
    font-weight:500;
    /* padding: 10px; */
`

export const SubSideNavList = styled.h4`
    text-transform:capitalize;
    font-variant:small-caps;
    flex:auto;
    font-size:1rem;
    text-align:left;
    font-weight:500;
`

export const MainLayout = styled.section`
    width:100%;
    min-height:100vh;
    display:flex;
    transition:0.5s;
`;
export const SideBar = styled.aside`
    z-index:999;
    background:${THEME.white};
    position:sticky;
    top:80px;
    width:250px;
    height:calc(100vh - 80px);
    overflow-y:auto;
    transition:0.5s;
    padding : 20px 0;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    @media (max-width:700px) {
        position:fixed;
    }
    & ul li.ant-menu-item {
        /* margin-bottom:10px;
        padding-top:10px; */
        padding-bottom:10px;
        height:auto;
    }

    & ul li.ant-menu-submenu{
        /* margin-bottom:10px;
        padding-top:10px; */
        padding-bottom:10px;
        height:auto;
    }
${props => {

        switch (props.collapsed) {
            case true:
                return css `
            width:0px;
            transition:0.5s;
            `;
            case false:
                return css `
            width:250px;
            transition:0.5s;
            `;
            default:
                return css `
            width:250px;
            transition:0.5s;
            `;
        }
    }
    }
`;
export const CollapseTrigger = styled.div`
display:none;
cursor: pointer;
& svg{
    font-size:1.5rem;
}
@media (max-width:1100px) {
    display:block
}

`;
export const CollapseDiv = styled.div`
position:relative;
background:${THEME.white};
display:flex;
flex-direction:row;
align-items:center;
gap:10px;
z-index:999;
transition:0.5s;
@media (max-width:1100px) {
    position:absolute;
    padding:20px;
    right:20px;
    top:104px;
    z-index:99999;
    flex-direction:column;
    transition:0.5s;
    ${props => {

        switch (props.collapse) {
            case true:
                return css `
          display:flex;
          z-index:99999;
          transition:0.5s;
            `;
            case false:
                return css `
          display:none;
          transition:0.5s;
            `;
            default:
                return css`
           display:none;
           transition:0.5s;
            `;
        }
    }
    }
}
@media (max-width:697px) {
    position:absolute;
    padding:20px;
    right:0;
    left:0;
    top:104px;
    z-index:99999;
    flex-direction:column;
    transition:0.5s;
    ${props => {

        switch (props.collapse) {
            case true:
                return css `
          display:flex;
          z-index:99999;
          transition:0.5s;
            `;
            case false:
                return css `
          display:none;
          transition:0.5s;
            `;
            default:
                return css `
           display:none;
           transition:0.5s;
            `;
        }
    }
    }
}

`;
export const ContentLayout = styled.section`
    transition:0.5s;
    height:inherit;
    height:100vh;
    overflow:hidden;

${props => {

        switch (props.collapsed) {
            case true:
                return css`
            width:100%;
            margin-left:0;
            transition:0.5s;
            `;
            case false:
                return css`
           width:calc(100% - 250px);
           /* margin-left:250px; */
           transition:0.5s;
           @media (max-width:700px) {
    width:100%;
}

            `;
            default:
                return css`
           width:calc(100% - 250px);
           /* margin-left:250px; */
           transition:0.5s;
           @media (max-width:700px) {
    width:100%;
}
            `;
        }
    }}
`;
export const ContentHeader = styled.div`
    z-index:999;
    position:fixed;
    /* padding:20px; */
    height:80px;
    background:${THEME.white};
    top:0;
    left:0;
    right:0;
    transition:0.5s;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
export const MainContent = styled.section`
    padding: 0 10px;
    padding-bottom: 30px;
    margin:86px 10px 10px 10px;
    height:calc(100vh - 160px);
    overflow-x:hidden;
    overflow-y:auto;
`;



export const SearchInput = styled(Input)`
    &.ant-input-affix-wrapper{
        border:none ;
        box-shadow:none;
    }
    & .ant-input-prefix{
        margin-inline-end:10px;
    }
`;

/* ============== Footer  */
export const FooterWrapper = styled.div`
    height:60px;
    margin:10px;
    display:flex;
    align-items:center;
    padding:10px 20px;
    justify-content:space-between;
    flex-direction:column;
    background:${THEME.white};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:6px;
    pointer-events:none;

    @media ${THEME.MOBILEL} {
        flex-direction:row;
    }
`

export const FooterContent = styled.div`
    font-size:.85rem;
    margin: 2px 10px;
    color:${THEME.black};

    & a{
        color:red;
        font-weight:600;
        cursor: pointer;
        pointer-events:all;
    }

    &:nth-child(2){
        text-align:right;
    }

    @media ${THEME.MOBILEL} {
        font-size:1rem;
    }
`

export const HeaderIconHolder = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 10px;
    color: white;
    & .header__icon{
    font-size: 28px;
    cursor: pointer;
    }
`

export const BtnSideHolder = styled.div`
margin: 0 10px;
 background: black;
    width: 40px;
    height: 40px;
    display: flex;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
 
 & .header__icon{
    font-size: 26px;
    }
`