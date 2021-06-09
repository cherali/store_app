import styled, { keyframes } from 'styled-components'
import { blueColor } from 'common/styles/themeColors'

const SIZES = {
  med: 40,
  small: 30,
}


const svgAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`

const circleAnimation = keyframes`
  0%,
  25% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  50%,
  65% {
    stroke-dashoffset: 30;
    transform: rotate(45deg);
  }
  100% {
    stroke-dashoffset: 280;
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`


const SVG = styled.svg`
  animation: 2s linear infinite ${svgAnimation};
  max-width: ${p => SIZES[p.spinnerSize]}px;
  border-radius: 50%;
`

const Circle = styled.circle`
  animation: 2.3s ease-in-out infinite both ${circleAnimation};
  display: block;
  fill: transparent;
  stroke: ${blueColor};
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  stroke-width: 15px;
  transform-origin: 50% 50%;
`



function Spinner({ size = 'med' }) {
  return (
    <Container>
      <SVG viewBox="0 0 100 100" spinnerSize={size}>
        <Circle cx="50" cy="50" r="50" />
      </SVG>
    </Container>
  )
}

export default Spinner
