import React, { useState } from 'react'
import { itemObj, GameContext } from '../types'
import { connect } from 'react-redux'
import { removeItem } from '../redux/actions'

export const ItemUnity = (Props: {item: itemObj, dispatch: any}): React.ReactElement => {
    const { item, dispatch } = Props
    const { id, name, quantity, locked } = item
    console.log({ Props})
    return <li>
        <p>{name}</p>
        <p>{quantity}</p>
        {!locked && <button onClick={() => dispatch(removeItem(id))}> Delete </button>}
    </li>
}

export const deleteItem = (itemId: number) => null

export default connect()(ItemUnity)