import React, { useState, useEffect, useContext } from 'react'
import Background from './components/background'
import Game from './components/game'

import { Provider } from 'react-redux'

import Items from './components/Items/Items'
import store from './components/redux/store'

const Main = () => {
  const currentHour: number = Math.floor(new Date().getHours() / 2)

  /* TODO
  useEffect(() => {
    const localStorageSave: savedGame = localStorage.getItem("savedGame") && JSON.parse(localStorage.getItem("savedGame") || '{}')
    if (localStorageSave && (localStorageSave.points || localStorageSave.name)) {
      setSavedGame(localStorageSave)
    }
  }, [])*/
  console.log({ state: store.getState()})
  return (
    // <GameState.Provider value={{ gameStatus: gameStats, savedGame, setSavedGame, item }}>
      <Provider store={store}>
        <Background currentHour={currentHour} >
          <Game />
          <Items/>
        </Background>
      </Provider>
    // </GameState.Provider>
  )
}

export default Main;
