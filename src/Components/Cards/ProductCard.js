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
  padding: 2rem 2rem 1.25rem;
  font-size: 30px;
  text-decoration: none;
  text-align: center;
  width: 25%;
  border-bottom: 1px solid ${borderColor};

  /* border for ltr direction */
  border-right: 1px solid ${borderColor};
`

const ProductImage = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
`


export function ProductCard({ product }) {
  return (
    <ProductCardContainer to={{
      pathname: `/product-details/${product.id}`,
      state: { product }
    }}>
      <ProductImage alt='' src='https://via.placeholder.com/270' />
      <Text tag='span' variant='title' align='left'>{product.title}</Text>
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

