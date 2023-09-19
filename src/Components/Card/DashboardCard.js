import React from 'react'
import {
    DCardWrapper,
    IconHolder,
    DCardContentHolder,
    DCardHeading,
    DCardNumber,
} from './Styled'

const DashboardCard = ({ data }) => {
    console.log(data,'hjsexdrcfyg')
    return (
        <DCardWrapper bgColor={data.bgColor} bgSecondaryColor={data.bgSecondaryColor}>
            <IconHolder bgColor={data.bgColor}>
                {data.icon}
            </IconHolder>

            <DCardContentHolder bgColor={data.bgSecondaryColor}>
                <DCardHeading color={data.textColor}>
                  {data.name}
                </DCardHeading>

                <DCardNumber color={data.bgColor}>{data.value}</DCardNumber>
            </DCardContentHolder>

        </DCardWrapper>
    )
}

export default DashboardCard
