import React, { useRef, useEffect, useContext, useState } from 'react'
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


let gameMap = [
    [12, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [12, 1, 2, 10, 11, 12, 13, 14, 15, 16],
    [12, 1, 2, 17, 18, 19, 20, 21, 22, 23],
    [12, 1, 2, 0, 0, 0, 0, 0, 0, 5],
    [12, 1, 2, 1, 0, 0, 0, 0, 0, 5]
]

const tileSize: number = 32;

const getTile = () => {


}


const Game: React.FC<gameProps> = ({ save }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        console.log('on mount hook')
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            const tileSet: HTMLImageElement = new Image()
            const tileSetRowSize = 8;
            const tileSetColSize = 8;
            tileSet.src = "../assets/imgs/room.gif"
            console.log(`image urL `, "localhost:3000/assets/imgs/room.gif")
            tileSet.onload = () => {

                console.log(`carrego essa porra`)
                gameMap.map((row, y) => {
                    row.forEach((id, x) => {
                        console.log(`x, y `, { x, y, tileSize, id, row })
                        if (context) {

                            const xPos = x * tileSize;
                            const yPos = y * tileSize;
                            const tile = id
                            const tileRow = (tile / tileSetRowSize) | 0
                            const tileCol = (tile % tileSetColSize) | 0
                            console.log(`Cant read property: `, { tileRow, tileCol })
                            context.drawImage(tileSet, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);
                            /*
                            context.save()
                            context.beginPath()
                            context.strokeRect(xPos, yPos, 32, 32)
                            context.fillStyle = context && !id ? "orange" : id === 1 ? "yellow" : id === 5 ? "pink" : "red"
                            context.fillRect(xPos, yPos, tileSize, tileSize)
                            context.stroke()
                            context.restore()
                            context.closePath()*/
                        }

                    })
                })
                setLoading(false)
            }
        }
    }, [])

    const gameContext = useContext(GameState)

    console.log(`game context: `, gameContext)
    return (
        <Container>
            <canvas
                ref={canvasRef}
                hidden={loading}
                onClick={(x) => {
                    const me = { ...x }
                    const canvas = canvasRef.current
                    console.log(`CLicked at `, { me }, ` with keys ${Object.keys(me)} ref: ${canvas}`)
                }}
                width={640}
                height={320}
            ></canvas >
        </Container>
    )
}

const Container: React.FC = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    align-self: center;
    justify-content: center;
    > canvas {
        display: flex;
        width: 50vw;
        height: 50vh;
        /* border: solid 1px white; */
        opacity: 100%;
        padding: 12px;
    }
`

export default Game;