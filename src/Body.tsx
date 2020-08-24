import React from 'react'
import styled from 'styled-components'
import Background, { getBackground } from './components/background'

const App = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)
  return (
      <Background currentHour={currentHour}>  
      </Background>
  )
}

const Container = styled.div`
  background-color: #000;
  
`;


export default App;
