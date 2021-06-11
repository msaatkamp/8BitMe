import React, { useRef, useEffect, useContext, useState, ContextType, SyntheticEvent } from 'react'
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

            let iX = 0

            const canvas = canvasRef.current;
            const context = canvas.getContext('2d')
            const tileSet: HTMLImageElement = new Image()
            const tileSetRowSize = 8;
            const tileSetColSize = 8;
            tileSet.src = "../assets/imgs/room.png"
            tileSet.onload = () => {

                while(iX<8) {
                    let iY = 0

                    while(iY < 256) {
                        if(context) {
                            const xPos = iX * tileSize;
                            const yPos = iY * tileSize;
                            const tile = iX+(iY*8)
                            const tileRow = (tile / tileSetRowSize) | 0
                            const tileCol = (tile % tileSetColSize) | 0
                            context.drawImage(tileSet, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);

                            context.fillStyle = 'white'
                            context.fillText((tile).toString(), xPos + 12, yPos + 16, tileSize)
                            iY++
                        }
                    }

                    iX++
                }

                // layer1.map((row, y) => {
                //     row.forEach((id, x) => {
                //         if (context) {
                //             // Total Size: x: 8 y: 133
                //             const xPos = x * tileSize;
                //             const yPos = y * tileSize;
                //             const tile = i
                //             const tileRow = (tile / tileSetRowSize) | 0
                //             const tileCol = (tile % tileSetColSize) | 0
                //             const tileRow2 = (1027 / tileSetRowSize) | 0
                //             const tileCol2 = (1027 % tileSetColSize) | 0
                //             context.drawImage(tileSet, (tileCol * tileSize), (tileRow * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);
                //             context.fillText((i).toString(), xPos, yPos + 8, tileSize)
                //             i++

                //             // if(x === 5 && y === 2) {
                //             //     context.drawImage(tileSet, (tileCol2 * tileSize), (tileRow2 * tileSize), tileSize, tileSize, (xPos), (yPos), tileSize, tileSize);
                //             // }
                //             /*
                //             context.save()
                //             context.beginPath()
                //             context.strokeRect(xPos, yPos, 32, 32)
                //             context.fillStyle = context && !id ? "orange" : id === 1 ? "yellow" : id === 5 ? "pink" : "red"
                //             context.fillRect(xPos, yPos, tileSize, tileSize)
                //             context.stroke()
                //             context.restore()
                //             context.closePath()*/
                //         }

                //     })
                // })
                setLoading(false)
            }
        }
    }, [])

    const gameContext = useContext(GameState)
    const { started, music, paused } = gameContext?.gameStatus

    const keyPressMap = (e: React.KeyboardEvent) => {
        const key = e.key

        console.log({ key })
        console.log({ started, paused, music })

    }

    return (
        <Container>
            <canvas
                ref={canvasRef}
                hidden={loading}
                onClick={(x) => {
                    const me = { ...x }
                    const canvas = canvasRef.current
                }}
                onKeyPress={keyPressMap}
                width={640}
                height={320}
            ></canvas >
        </Container>
    )
}

const Container: React.FC = styled.div`
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