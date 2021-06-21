export type GameContext = {
    currentGame: (gameStatus ),
    savedGame?: savedGame,
    setSavedGame?: (savedGame: savedGame) => void
}
  
export type itemObj = {
    id: number,
    name: string,
    quantity?: number,
    locked?: boolean
}

export type savedGame = {
    points?: number,
    name?: string,
    company?: string,
    itemList?: itemObj[]
}
export type gameStatus = {
    started: boolean,
    paused: boolean,
    music: boolean
} & savedGame

type gameProps = {
    save?: object
}
