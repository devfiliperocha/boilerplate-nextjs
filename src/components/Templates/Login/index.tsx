import { Grid } from '@material-ui/core'
import Button from 'components/Atoms/Button'
import TextField from 'components/Atoms/TextField'
import Typography from 'components/Atoms/Typography'
import { UserContextProps } from 'contexts/user'
import React, { useState } from 'react'
import Loading from 'components/Atoms/Loading'
import Logo from 'components/Atoms/Logo'
import Alert from 'components/Atoms/Alert'
import Icon from 'components/Atoms/Icon'
import * as S from './styles' /** S = Styles */

type LoginProps = Pick<
  UserContextProps,
  'login' | 'isLoading' | 'hasError' | 'errorMsg' | 'setError'
>

const Login = ({
  login,
  isLoading,
  hasError,
  errorMsg,
  setError
}: LoginProps) => {
  const [identifier, setIdentifier] = useState('test@test.com')
  const [password, setPassword] = useState('test')

  const LogIn = async () => {
    setError('')
    await login(identifier, password)
  }

  return (
    <S.Wrapper>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.FormContainer>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" color="info">
              Entrar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              iconLeft={
                <Icon
                  variant="grey"
                  name="Person"
                  type="filled"
                  sx={{ marginRight: '1rem' }}
                />
              }
              disabled={isLoading}
              fullWidth
              placeholder="Usuário"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              iconLeft={
                <Icon
                  variant="grey"
                  name="LockClosed"
                  type="filled"
                  sx={{ marginRight: '1rem' }}
                />
              }
              disabled={isLoading}
              fullWidth
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={7} sx={{ textAlign: 'left' }}>
            <Button
              size="small"
              variant="text"
              color="accent"
              disabled={isLoading}
            >
              Esqueceu a senha
            </Button>
          </Grid>
          <Grid item xs={5} sx={{ textAlign: 'right' }}>
            <Button onClick={() => LogIn()} disabled={isLoading}>
              Entrar
            </Button>
          </Grid>

          <Grid item xs={12}>
            {isLoading && <Loading size={35} />}
            {hasError && !isLoading && (
              <Grid item>
                <Alert severity="error">{errorMsg}</Alert>
              </Grid>
            )}
          </Grid>
        </Grid>
      </S.FormContainer>
    </S.Wrapper>
  )
}

export default Login
