import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { borderColor } from 'common/styles/themeColors'
import Comments from 'Components/Comments/Comments'
import Text from 'Components/Text/Text'


const Container = styled.div`
  padding: 1rem 3rem;
`

const TopSection = styled.div`
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${borderColor};
`

const Img = styled.img`
  width: 25%;
  margin: 0 auto;
  display: block;
`

// TODO: if product is null then get data using productId
function ProductDetails() {
  const history = useHistory()

  // const productId = history.location.pathname?.split('/').slice(-1).join('')
  const product = history.location?.state?.product || null


  return (
    <Container>
      {
        product ? <>
          <TopSection>
            <Img src={product.image} alt=' ' />
            <Text align='center' weight={600} variant='h3'>{product.text}</Text>
          </TopSection>

          <Comments id={product.id} />
        </>
          :
          <Text>product is unavailable</Text>
      }
    </Container>
  )
}

export default ProductDetails
