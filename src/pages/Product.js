import { ProductCard, ProductCardsWrapper } from "Components/Cards/ProductCard"
import styled from "styled-components"

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
