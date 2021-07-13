import React from 'react'
import { Pricing } from '../../components';

import InfoSection from '../../components/InfoSection/InfoSection';

import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

export default function Home() {
    return (
        <>
         <InfoSection {...homeObjOne}/>   
         <InfoSection {...homeObjThree}/>
         <InfoSection {...homeObjTwo}/>   
         <Pricing />
         <InfoSection {...homeObjFour}/>   
        </>
    )
}
 