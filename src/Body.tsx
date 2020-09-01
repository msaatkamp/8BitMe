import React from 'react'
import styled from 'styled-components'
import Background, { getBackground } from './components/background'

const Body = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)
  return (
      <Background currentHour={currentHour} />
  )
}


export default Body;
