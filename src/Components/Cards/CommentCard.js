import styled from 'styled-components'
import { blueColor } from 'common/styles/themeColors'
import Text from 'Components/Text/Text'

const Container = styled.div`
  display: flex;
  gap: 2rem;
  :not(:last-of-type) {
    margin-bottom: 3rem;
  }

  :last-of-type {
    margin-bottom: 1rem;
  }
`

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`

const Content = styled.div`
  display: block;
`

const EmailText = styled(Text)`
  color: ${blueColor};
`


function CommentCard({ comment }) {
  return (
    <Container>
      <Avatar alt=' ' src={comment.avatar} />

      <Content>
        <Text tag='p' variant='titleItem' lineHeight={25} weight={600}>{comment.title}</Text>
        <EmailText tag='p' variant='titleItem' lineHeight={35} weight={600}>{comment.email}</EmailText>
        <Text tag='p' variant='title' lineHeight={20}>{comment.body}</Text>
      </Content>
    </Container>
  )
}

export default CommentCard
