import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getBackground } from './components/helpers/utils'

const App = () => {
  const [dayTime, setDayTime] = useState(0)
  const [Background, setBackground] = useState(0)

  useEffect(() => {
    const hourNow = Math.floor(new Date().getHours() / 2)
    if(dayTime == hourNow || dayTime === hourNow +1)
      setDayTime(hourNow)
      getBackground(hourNow)
  }, [dayTime])
  
  return (
      <Background>  
        <Container>

        </Container>
      </Background>
  )
}

const Container = styled.div`
  background-color: #000;
  
`;


export default App;
