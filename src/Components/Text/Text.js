import styled from 'styled-components'
import { text_dd, titleColor } from 'common/styles/themeColors'


const FONT_SIZE = {
  text: 14,
  title: 16,
  h3: 24,
  titleItem: 18,
}

const FONT_COLOR = {
  text: 'inherit',
  title: titleColor,
  h3: 'black',
  titleItem: text_dd,
}

const DISPLAYS = {
  text: 'initial',
  title: 'inline-block',
  h3: 'block',
  titleItem: 'block',
}

const TextCmp = styled.span`
  text-decoration: ${p => p.decoration};
  color: ${p => FONT_COLOR[p.variant]};
  font-size: ${p => FONT_SIZE[p.variant]}px;
  display: ${p => DISPLAYS[p.variant]};
  text-align: ${p => p.align};
  font-weight: ${p => p.weight};
  line-height: ${p => p.lineHeight}px;
`

function Text({ children, variant, decoration, tag, align, weight, lineHeight, ...rest }) {
  return (
    <TextCmp
      as={tag}
      variant={variant}
      decoration={decoration}
      align={align}
      weight={weight}
      lineHeight={lineHeight}
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
  weight: 300,
  lineHeight: 'normal'
}

export default Text
