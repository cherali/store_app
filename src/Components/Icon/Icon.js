import { ReactComponent as YourSvg } from 'assets/icons/tick.svg';


const ICONS = {
  tick: YourSvg,
}


const Icon = ({ name }) => {
  const Svg = ICONS[name]
  return <Svg />
}

export default Icon
