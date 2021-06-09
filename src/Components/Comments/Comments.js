import styled from 'styled-components'
import CommentCard from 'Components/Cards/CommentCard'

// TODO: replace this data with real data
// fake data
const COMMNETS = [
  { id: 1, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 2, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 3, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 4, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 5, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 6, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 7, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 8, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
  { id: 9, avatar: '/assets/images/avatar.jpg', title: 'id labore ex et quam laborum', email: 'Eliseo@gardner.biz', body: '"laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium' },
]

const Container = styled.div`
  padding: 3rem 0 0;
`

// TODO: product id required to get comment of posts
function Comments({ id }) {
  return (
    <Container>
      {COMMNETS?.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Container>
  )
}

export default Comments
