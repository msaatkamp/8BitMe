import { createStore, combineReducers } from 'redux'
import { gameStatus, savedGame, } from '../types'

const itemList = () => [
    {
        id: 1,
        name: "Adaga",
        quantity: 1,
        locked: false
    },
    {
        id: 2,
        name: "Pot",
        quantity: 2,
        locked: false
    }
]

const currentGame: gameStatus = { started: false, paused: false, music: false }

let reducers = {
    initialState: () => {
        return { itemList, currentGame, savedGame: {}}
    }
}

const store = createStore(reducers.initialState)

export default store
