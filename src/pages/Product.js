import { useSelector } from "react-redux"
import styled from "styled-components"
import { ProductCard, ProductCardsWrapper } from "Components/Cards/ProductCard"
import Text from "Components/Text/Text"
import Alert from "Components/Alert/Alert"
import Spinner from "Components/Spinner/Spinner"

import { getProductsList } from "redux/actions/productActions"

getProductsList()


const Container = styled.div`
  padding: 1rem 3rem;
`

function Product() {
  const products = useSelector(s => s?.products?.products)

  return (
    <Container>
      {!products && <Spinner />}
      {products && <>

        <Alert
          variant='warning'
          iconName='tick'
        >
          <Text weight={600} className='mx-3'> تغییر وضعیت کالا ممکن هست با تاخیر انجام گردد اما مراحل خرید و ارسال  طبق زمان تخمینی اعلام شده انجام خواهد شد.</Text>
        </Alert>
        <ProductCardsWrapper>
          {
            products.map(item => (
              <ProductCard key={item.id} product={item} />
            ))
          }
        </ProductCardsWrapper>
      </>}
    </Container>
  )
}

export default Product
