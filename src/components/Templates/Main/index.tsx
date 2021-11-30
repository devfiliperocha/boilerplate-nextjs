import * as S from './styles' /** S = Styles */

const Main = ({
  title = '',
  description = '',
  logo = '/img/logo.svg',
  illustration = '/img/hero-illustration.svg'
}) => (
  <S.Wrapper>
    <main>
      <S.Logo src={logo} alt="" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src={illustration} alt="" />
      <br />
    </main>
  </S.Wrapper>
)

export default Main
