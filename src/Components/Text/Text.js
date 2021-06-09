import styled from 'styled-components'
import { titleColor } from 'common/styles/themeColors'


const FONT_SIZE = {
  text: 14,
  title: 16,
}

const FONT_COLOR = {
  text: 'inherit',
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
  font-weight: ${p => p.weight};
`

function Text({ children, variant, decoration, tag, align, weight, ...rest }) {
  return (
    <TextCmp
      as={tag}
      variant={variant}
      decoration={decoration}
      align={align}
      weight={weight}
      {...rest}
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
  weight: 300
}

export default Text
