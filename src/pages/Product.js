import styled from "styled-components"
import { ProductCard, ProductCardsWrapper } from "Components/Cards/ProductCard"
import Text from "Components/Text/Text"
import Alert from "Components/Alert/Alert"

// TODO: replace this data with real data
// fake data
const PRODUCTS = [
  { id: 1, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 2, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 3, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 4, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 5, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 6, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 7, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 8, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
  { id: 9, image: '/assets/images/laptop.jpg', text: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit' },
]

const Container = styled.div`
  padding: 1rem 3rem;
`


function Product() {
  return (
    <Container>
      <Alert 
        variant='warning'
        iconName='tick'
       >
        <Text weight={600} className='mx-3'> تغییر وضعیت کالا ممکن هست با تاخیر انجام گردد اما مراحل خرید و ارسال  طبق زمان تخمینی اعلام شده انجام خواهد شد.</Text>
         </Alert>
      <ProductCardsWrapper>
        {
          PRODUCTS.map(item => (
            <ProductCard key={item.id} product={item} />
          ))
        }
      </ProductCardsWrapper>
    </Container>
  )
}

export default Product
