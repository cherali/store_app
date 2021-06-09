import styled from 'styled-components'
import { titleColor } from 'common/styles/themeColors'


const FONT_SIZE = {
  text: 14,
  title: 16,
}

const FONT_COLOR = {
  text: 'black',
  title: titleColor,
}

const DISPLAYS = {
  text: 'initial',
  title: 'inline-block',
}

const TextCmp = styled.span`
  text-decoration: ${p => p.decoration};
  color: ${p => FONT_COLOR[p.variant]};
  font-size: ${p => FONT_SIZE[p.variant]}px;
  display: ${p => DISPLAYS[p.variant]};
  text-align: ${p => p.align};
`

function Text({ children, variant, decoration, tag, align }) {
  return (
    <TextCmp
      as={tag}
      variant={variant}
      decoration={decoration}
      align={align}
    >
      {children}
    </TextCmp>
  )
}

Text.defaultProps = {
  variant: 'text',
  tag: 'span',
  decoration: 'auto',
  align: 'inherit',
}

export default Text
