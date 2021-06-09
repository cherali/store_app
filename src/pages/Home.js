import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// TODO: remove redirection
function Home() {
  const history = useHistory()

  useEffect(() => {
    history.replace('/product')
  }, [history])

  return (
    <div>
      home
    </div>
  )
}

export default Home
