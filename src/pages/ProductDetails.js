import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { borderColor } from 'common/styles/themeColors'
import Api from 'common/utils/api/api'
import { postUrl } from 'common/urls'
import Comments from 'Components/Comments/Comments'
import Text from 'Components/Text/Text'
import Spinner from 'Components/Spinner/Spinner'



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

function ProductDetails() {
  const history = useHistory()
  const [product, setProduct] = useState(history.location?.state?.product || null)

  const productId = history.location.pathname?.split('/').slice(-1).join('')

  const getPost = async (id) => {
    const productData = await Api({
      url: `${postUrl}/${id}`
    })
    setProduct(productData)
  }

  useEffect(() => {
    if (!product) {
      getPost(productId)
    }
  }, [product, productId])

  return (
    <Container>
      {!product && <Spinner />}
      {
        product && <>
          <TopSection>
            <Img src='https://via.placeholder.com/500' alt=' ' />
            <Text align='center' weight={600} variant='h3'>{product.text}</Text>
          </TopSection>

          <Comments id={product.id} />
        </>
      }
    </Container>
  )
}

export default ProductDetails
