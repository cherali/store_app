import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { borderColor } from 'common/styles/themeColors'
import Text from 'Components/Text/Text'

// TODO: fix border for rtl direction.
const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border-top: 1px solid ${borderColor};

  /* border for ltr direction */
  border-left: 1px solid ${borderColor};
`

const ProductCardContainer = styled(Link)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem 2rem 1.25rem;
  font-size: 30px;
  text-decoration: none;
  text-align: center;
  width: 25%;
  border-bottom: 1px solid ${borderColor};

  /* border for ltr direction */
  border-right: 1px solid ${borderColor};
`

const ProductImage = styled.img``


export function ProductCard({ product }) {
  return (
    <ProductCardContainer to={`/product-details/${product.id}`}>
      <ProductImage alt='' src={product.image} />
      <Text tag='span' variant='title' align='left'>{product.text}</Text>
    </ProductCardContainer>
  )
}

export function ProductCardsWrapper({ children }) {
  return (
    <ProductWrapper>
      {children}
    </ProductWrapper>
  )
}

