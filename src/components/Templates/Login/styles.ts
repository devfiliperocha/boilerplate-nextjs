import { Container } from '@material-ui/core'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container)`
  margin-top: 5rem;
  ${media.greaterThan('small')`
      margin-top: 7rem;
    `}
`
export const FormContainer = styled.div`
  padding: 4rem 3rem;
  margin: 0 auto;
  max-width: 99%;

  ${({ theme }) => css`
    background: ${theme.palette.common.white};
  `}

  ${media.greaterThan('small')`
      width: 45rem;
    `}
`
export const LogoContainer = styled.div`
  margin: 3rem auto;
  width: 20rem;
  ${media.greaterThan('small')`
    width: 25rem;
  `};
`
