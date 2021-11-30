import { withAuth } from 'components/hoc/Auth'
import React from 'react'
import { UserContext } from 'contexts/user'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { Container } from '@material-ui/core'
import Button from 'components/Atoms/Button'

const Home = () => {
  const { isLogged, user, logout } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (!isLogged) {
      router.push('/login')
    }
  }, [isLogged, router])

  return (
    <Container sx={{ backgroundColor: 'white' }}>
      Logado:
      <div>
        <code>{JSON.stringify(user, null, 2)}</code>
      </div>
      <Button onClick={logout}>Logout</Button>
    </Container>
  )
}

export default withAuth(Home)
