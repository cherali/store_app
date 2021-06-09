import styled from 'styled-components'
import { orange, orangeDark, orangeLight } from 'common/styles/themeColors'
import Icon from 'Components/Icon/Icon'

// TODO: add more types
const ALERT_VARIANT_BG_COLOR = {
  success: 'green',
  warning: orangeLight,
}

const ALERT_VARIANT_TEXT_COLOR = {
  success: 'green',
  warning: orangeDark
}

const ALERT_VARIANT_BORDER_COLOR = {
  warning: orange,
  success: 'green',
}

const ALERT_VARIANT_ICON_NAME = {
  success: 'tick',
  warning: 'wrning'
}


const AlertContainer = styled.div`
  width: 100%;
  border-radius: 3px;
  padding: 1rem 0.5rem;
  direction: rtl;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid ${p => ALERT_VARIANT_BORDER_COLOR[p.variant]};
  background-color: ${p => ALERT_VARIANT_BG_COLOR[p.variant]};
  color: ${p => ALERT_VARIANT_TEXT_COLOR[p.variant]};
`



function Alert({ variant, iconName, children }) {
  return (
    <AlertContainer
      variant={variant}
      iconName={iconName}
    >
      <Icon name={iconName || ALERT_VARIANT_ICON_NAME[variant]} />
      {children}
    </AlertContainer>
  )
}

Alert.defaultProps = {
  variant: 'success',
  iconName: ''
}

export default Alert
