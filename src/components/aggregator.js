//import React, {Component} from 'react'
// import all individual templates
import RoadSign1 from './templates/RoadSign1'

const allTemplates ={
    RoadSign1: <RoadSign1/>
}

const retrieve=()=>{
    //console.log(Object.keys(allTemplates))
    return allTemplates;
}

export default retrieve