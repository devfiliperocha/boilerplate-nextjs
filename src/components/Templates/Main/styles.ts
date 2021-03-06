import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #1b2936;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  height: 5.5rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  width: 45rem;
  line-height: 2rem;
  margin: 2rem;
`

export const Description = styled.h2`
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  font-weight: 200;
  color: lightgrey;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
  height: min(30rem, 100%);
`
