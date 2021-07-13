import React from 'react'
import { Pricing } from '../../components';

import InfoSection from '../../components/InfoSection/InfoSection';

import { homeObjFour } from './Data'

export default function Services() {
    return (
        <> 
         <Pricing />
         <InfoSection {...homeObjFour}/>   
        </>
    )
}
 