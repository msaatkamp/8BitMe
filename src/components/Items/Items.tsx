import React, { useState } from 'react'
import ItemUnity from './Item'
import { itemObj, GameContext } from '../types'
import { connect } from 'react-redux'

const Items = (Props: { itemList: itemObj[] }): React.ReactElement => {
    const { itemList } = Props
    console.log({itemProps: Props, itemList})
    return <ul>
            {
                itemList && itemList.length &&
                    itemList.map((item: itemObj) => 
                        <ItemUnity item={item} key={item.name} />)
                        || 95
                    }
        </ul>
}


export default connect((state: GameContext) => ({ itemList: (state?.currentGame?.itemList) || defaultItemList, }))(Items)

const defaultItemList = [{id: 99, name: 'key', quantity: 1, locked: false}]