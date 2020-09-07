import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

export type savedGame = {
    points?: number,
    name?: string,
    company?: string
}

type gameProps = {
    save?: object
}

const Game: React.FC<gameProps> = ({ save }) => {
    useEffect(() => {
        console.log('on mount hook')
    }, [])
    return (
        <Container>
            <canvas onClick={(x) => {
                const me = x
                console.log(`CLicked at `, me , ` with keys ${Object.keys(me)}`)
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