import { createGlobalStyle } from 'styled-components'
import { THEME } from '.'

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing:border-box;
}
  body {
    margin: 0;
    padding: 0;
    font-family:  'Poppins', sans-serif;
    background:#eeeeee;
    width:100%;
    /* overflow:hidden; */
  }
  
  a, a:focus, a:hover {
  color: ${THEME.PRIMARY};
  text-decoration: none;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(56, 112, 214,.8); 
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 112, 214,1); 
  }
`

export default GlobalStyle
