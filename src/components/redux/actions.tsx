export const addItem = (itemId: number) => {
    console.log({addItem: itemId})
    return {
        type: 'ADD_ITEM',
        itemId
    }
}

export const removeItem = (itemId: number) => {
    console.log({removeItem: itemId})
    return {
        type: 'REMOVE_ITEM',
        itemId: itemId
    }
}