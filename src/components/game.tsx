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


let layer1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

const tileSize: number = 32;

const getTile = () => {


}


const Game: React.FC<gameProps> = ({ save }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            const tileSet: HTMLImageElement = new Image()
            const tileSetRowSize = 8;
            const tileSetColSize = 8;
            tileSet.src = "../assets/imgs/room.png"
            tileSet.onload = () => {

                layer1.map((row, y) => {
                    row.forEach((id, x) => {
                        if (context) {
                            // Total Size: x: 8 y: 133
                            const xPos = x * tileSize;
                            const yPos = y * tileSize;
                            const tile = id
                            const tileRow = (tile / tileSetRowSize) | 0
                            const tileCol = (tile % tileSetColSize) | 0
                            const tileRow2 = (1027 / tileSetRowSize) | 0
                            const tileCol2 = (1027 % tileSetColSize) | 0
                            context.drawImage(tileSet, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);

                            if(x == 5 && y == 2) {
                                context.drawImage(tileSet, (tileCol2 * tileSize), (tileRow2 * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);
                            }
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

    return (
        <Container>
            <canvas
                ref={canvasRef}
                hidden={loading}
                onClick={(x) => {
                    const me = { ...x }
                    const canvas = canvasRef.current
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