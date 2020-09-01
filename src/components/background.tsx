import React, {
  useState, useEffect, FunctionComponent, ReactNode,
} from 'react';
import styled from 'styled-components';

type BackgroundProps = {
    currentHour: number,
    children?: ReactNode
}
const Background: React.FC<BackgroundProps> = ({ currentHour }) => {
  console.log(`url: ` , getBackground(currentHour) , {hour: currentHour})
  const imgUrl = getBackground(currentHour)
  const BitImage = styled.img`
    height: 100%;
    width: 80vw;
    padding: 0 10%;
  `

  const BitBackground = styled.div`
    background: url(${imgUrl}) no-repeat center;
    background-size: 100% 100%;
    background-attachment: fixed;
    height: 100vh;
    width: 100%;
  `

  /* useEffect(() => {
    if(dayTime == currentHour || dayTime === currentHour + 1)
      setDayTime(currentHour)
      backgroundUrl = getBackground(dayTime)
  }, [dayTime, backgroundUrl])
    }
  */

  return (
    <BitBackground>
      {/* <BitImage src={imgUrl} /> */}
    </BitBackground>
  )
}


export default Background;

export const getBackground: Function = (hour: number) => {
  let backgroundUrl: string = "";

  switch (hour) {
    case 0:
      backgroundUrl = '/img/12-Late-Night.png';
    case 1:
      backgroundUrl = '/img/01-Early-Morning.png';
      break;
    case 2:
      backgroundUrl = '/img/02-Mid-Morning.png';
      break;
    case 3:
      backgroundUrl = '/img/03-Late-Morning.png';
      break;
    case 4:
      backgroundUrl = '/img/04-Early-Afternoon.png';
      break;
    case 5:
      backgroundUrl = '/img/05-Mid-Afternoon.png';
      break;
    case 6:
      backgroundUrl = '/img/06-Late-Afternoon.png';
      break;
    case 7:
      backgroundUrl = '/img/07-Early-Evening.png';
      break;
    case 8:
      backgroundUrl = '/img/08-Mid-Evening.png';
      break;
    case 9:
      backgroundUrl = '/img/09-Late-Evening.png';
      break;
    case 10:
      backgroundUrl = '/img/10-Early-Night.png';
      break;
    case 11:
      backgroundUrl = '/img/11-Mid-Night.png';
      break;
    default:
      backgroundUrl = '/img/10-Early-Night.png';
      break;
  }
  
  return backgroundUrl
};
