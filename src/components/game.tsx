import React, { useRef, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { GameState } from '../Main'

export type savedGame = {
    points?: number,
    name?: string,
    company?: string
}
export type gameStatus = {
    started: boolean,
    paused: boolean,
    music: boolean
}

type gameProps = {
    save?: object
}

const Game: React.FC<gameProps> = ({ save }) => {
    let context = null;
    let gameMap = [
        0, 0, 1, 0, 0,
        0, 1, 1, 0, 0,
        0, 1, 0, 0, 0,
        0, 1, 0, 0, 0,
        0, 1, 1, 1, 2
    ]

    const canvasRef = useRef(null)


    useEffect(() => {
        console.log('on mount hook')
    }, [])

    const gameContext = useContext(GameState)

    console.log(`game context: `, gameContext)
    return (
        <Container>
            <canvas
                ref={canvasRef}
                hidden={true}
                onClick={(x) => {
                    const me = x
                    const canvas = canvasRef.current
                    console.log(`CLicked at `, me, ` with keys ${Object.keys(me)} ref: ${canvas}`)
                }}></canvas >
        </Container>
    )
}

const Container: React.FC = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    align-self: center;
    > canvas {
        width: 100%;
        height: auto;
        border: solid 1px white;
        opacity: 50%;
    }
`

export default Game;