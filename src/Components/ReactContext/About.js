import React from 'react'
import { useContext } from 'react'
import DataContxt from './DataContxt'

const About = () => {
    const Info = useContext(DataContxt)
  return (
    <div>
        <h1>Hey My Name is {Info.name} And My roll Number Is {Info.Roll} </h1>
    </div>
  )
}

export default About