import React from 'react'
import { Pricing } from '../../components';

import InfoSection from '../../components/InfoSection/InfoSection';

import { homeObjFour, homeObjThree, homeObjTwo } from './Data'

export default function Products() {
    return (
        <>
         <InfoSection {...homeObjThree}/>
         <InfoSection {...homeObjTwo}/>   
         <Pricing />
         <InfoSection {...homeObjFour}/>   
        </>
    )
}
 