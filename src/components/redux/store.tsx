import { createStore, combineReducers } from 'redux'
import { gameStatus, savedGame, GameContext, } from '../types'

const itemList = [
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

const currentGame: gameStatus = { started: false, paused: false, music: false, itemList: itemList }

const initialState = {currentGame, savedGame: {}}

const reducer = (state = initialState, action?: any) => {
    console.log({ action })
    switch (action.type) {
        case 'REMOVE_ITEM':
            // Remove an item from the items Array
            const beforeState = state
            let itemList = state.currentGame.itemList 
            itemList = itemList?.filter(e => e.id !== action.itemId)

            beforeState.currentGame.itemList = itemList
            return { ...beforeState }
        default:
        return state;
    }
}

const store = createStore(reducer)

export default store
