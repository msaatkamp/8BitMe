import React, { useState, useEffect, useContext } from 'react'
import Background from './components/background'
import Game, { savedGame, gameStatus } from './components/game'

const gameStats: gameStatus = { started: false, paused: false, music: false }

export interface GameContextType {
    gameStatus: gameStatus,
    savedGame?: savedGame,
    setSavedGame?: (savedGame: savedGame) => void
  }
export const GameState = React.createContext<GameContextType>({ gameStatus: gameStats })

const Main = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)
  const [savedGame, setSavedGame] = useState<savedGame>({})


  /* TODO
  useEffect(() => {
    const localStorageSave: savedGame = localStorage.getItem("savedGame") && JSON.parse(localStorage.getItem("savedGame") || '{}')
    if (localStorageSave && (localStorageSave.points || localStorageSave.name)) {
      setSavedGame(localStorageSave)
    }
  }, [])*/

  return (
    <GameState.Provider value={{ gameStatus: gameStats, savedGame, setSavedGame }}>
      <Background currentHour={currentHour} >
        <Game save={savedGame} />
      </Background>
    </GameState.Provider>
  )
}

export default Main;
