import React from 'react';
import styled from 'styled-components';

type BackgroundProps = {
  currentHour: number
}
const Background: React.FC<BackgroundProps> = ({ currentHour, children }) => {
  const imgUrl = getBackground(currentHour)

  const BitBackground = styled.div`
    background: url(${imgUrl});
    background-size: 100% 85%;
    background-color: #548934;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  console.log(`Current Hour: ` , currentHour)
  return (
    <BitBackground >
      {children}
    </BitBackground>
  )
}


export default Background;

export const getBackground: Function = (hour: number): string => {
  let backgroundUrl: string = "";

  switch (hour) {
    case 0:
      backgroundUrl = 'assets/imgs/12-Late-Night.png';
    case 1:
      backgroundUrl = 'assets/imgs/01-Early-Morning.png';
      break;
    case 2:
      backgroundUrl = 'assets/imgs/02-Mid-Morning.png';
      break;
    case 3:
      backgroundUrl = 'assets/imgs/03-Late-Morning.png';
      break;
    case 4:
      backgroundUrl = 'assets/imgs/04-Early-Afternoon.png';
      break;
    case 5:
      backgroundUrl = 'assets/imgs/05-Mid-Afternoon.png';
      break;
    case 6:
      backgroundUrl = 'assets/imgs/06-Late-Afternoon.png';
      break;
    case 7:
      backgroundUrl = 'assets/imgs/07-Early-Evening.png';
      break;
    case 8:
      backgroundUrl = 'assets/imgs/08-Mid-Evening.png';
      break;
    case 9:
      backgroundUrl = 'assets/imgs/09-Late-Evening.png';
      break;
    case 10:
      backgroundUrl = 'assets/imgs/10-Early-Night.png';
      break;
    case 11:
      backgroundUrl = 'assets/imgs/11-Mid-Night.png';
      break;
    default:
      backgroundUrl = 'assets/imgs/10-Early-Night.png';
      break;
  }

  return backgroundUrl
};
