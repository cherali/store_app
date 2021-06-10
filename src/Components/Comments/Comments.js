import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearProductCommentsList, getProductCommentsList } from 'redux/actions/commentActions'
import CommentCard from 'Components/Cards/CommentCard'
import Spinner from 'Components/Spinner/Spinner'
import Text from 'Components/Text/Text'

const Container = styled.div`
  padding: 3rem 0 0;
`

function Comments({ id }) {
  const [show, setShow] = useState(false) // use this flag to avoid clear comment flicking
  const comments = useSelector(s => s.comments?.productComments)


  useEffect(() => {
    const currentCommentPost = comments && comments[0]?.postId
    if(currentCommentPost !== id) {
      clearProductCommentsList() // clear comment list if id selected post changed
      getProductCommentsList(id) // get comments
      setShow(true)
    } else {
      setShow(true)
    }
  }, [id, comments])


  return (
    <Container>
      {!comments && <Spinner />}
      {show && comments?.map(comment => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      {comments?.length === 0 && <Text variant='titleItem' align='center'>No Comment</Text>}
    </Container>
  )
}

export default Comments
