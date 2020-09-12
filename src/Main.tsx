import React, { useState, useEffect, useContext } from 'react'
import Background from './components/background'
import Game, { savedGame, gameStatus } from './components/game'

export const GameState = React.createContext({})

const Main = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)
  const [savedGame, setSavedGame] = useState<savedGame>({})

  const gameStatus: gameStatus = { started: false, paused: false, music: false }

  /* TODO
  useEffect(() => {
    const localStorageSave: savedGame = localStorage.getItem("savedGame") && JSON.parse(localStorage.getItem("savedGame") || '{}')
    if (localStorageSave && (localStorageSave.points || localStorageSave.name)) {
      setSavedGame(localStorageSave)
    }
  }, [])*/

  return (
    <GameState.Provider value={{ gameStatus, savedGame, setSavedGame }}>
      <Background currentHour={currentHour} >
        <Game save={savedGame} />
      </Background>
    </GameState.Provider>
  )
}

export default Main;
