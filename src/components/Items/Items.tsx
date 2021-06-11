import React, { useState } from 'react'
import { ItemUnity } from './Item'
import { itemObj, GameContext } from '../types'
import { connect } from 'react-redux'

const Items = (Props: { itemList: itemObj[] }): React.ReactElement => {
    const { itemList } = Props
    return <ul>
            {
                itemList && itemList.length &&
                    itemList.map((item: itemObj) => 
                        <ItemUnity item={item} />)
                        || 95
                    }
        </ul>
}


export default connect((state: GameContext) => ({ itemList: state?.savedGame?.itemList || []}))(Items)