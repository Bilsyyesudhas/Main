import React from 'react'
import Flex from '../../Components/Flex'
import Button from "../../Components/Form/Button";

export const ThemeColor = () => {
  return (
    <Flex spaceBetween style={{backgroundColor:'white',padding:'40px'}}>
    <p style={{Left:"10px"}}> ThemeColor</p>
    <div style={{Right:"10px"}}>
      <Button.Success
        text={"Save"}
        
      />
    </div>
  </Flex>
  )
}

