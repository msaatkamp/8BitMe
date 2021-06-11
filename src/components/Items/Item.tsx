import React, { useState } from 'react'
import { itemObj } from '../types'

export const ItemUnity = (Props: {item: itemObj}): React.ReactElement => {
    const { item } = Props
    const { name, quantity, locked } = item
    return <li>
        <p>{name}</p>
        <p>{quantity}</p>
        {!locked && <button> Delete </button>}
    </li>
}



export const deleteItem = (itemId: number) => null