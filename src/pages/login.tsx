import Login from 'components/Templates/Login'
import { UserContext } from 'contexts/user'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'

export default function LogIn() {
  const { isLogged, login, isLoading, hasError, errorMsg, setError } =
    useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (isLogged) {
      router.push('/admin')
    }
  }, [isLogged, router])

  return (
    <Login
      login={login}
      isLoading={isLoading}
      hasError={hasError}
      errorMsg={errorMsg}
      setError={setError}
    />
  )
}
