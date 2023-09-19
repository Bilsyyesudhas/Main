import React from 'react'
import { Adimage } from './Adimage'
import { BottomSliderimage } from './BottomSliderimage'
import { TrendingServices } from './TrendingServices'
import { ThemeColor } from './ThemeColor'

export const ManageFrontend = () => {
  return (
    <>
     <h1>Manage Frontend</h1>
     <div style={{marginTop:'30px'}}>
   
    <ThemeColor />
    </div>
    <div style={{marginTop:'30px'}}>
   
    <Adimage />
    </div>
    <div style={{marginTop:'30px'}}>
    <BottomSliderimage  />
    </div>
    <div style={{marginTop:'30px'}}>
    <TrendingServices />
    </div>
    </>
  )
}

 