import React, { useState, useEffect } from 'react'
import Background from './components/background'
import Game, { savedGame } from './components/game'


const Body = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)
  const [savedGame, setSavedGame] = useState<savedGame>({})

  useEffect(() => {
    const localStorageSave: savedGame = localStorage.getItem("savedGame") && JSON.parse(localStorage.getItem("savedGame") || '{}')
    if (localStorageSave && (localStorageSave.points || localStorageSave.name)) {
      setSavedGame(localStorageSave)
    }
  }, [])

  return (
    <Background currentHour={currentHour} >
      <Game save={savedGame} />
    </Background>
  )
}


export default Body;
