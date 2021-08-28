import * as S from './styles' /** S = Styles */

const Main = ({
  title = 'Desenvolvimento de Software e Aplicativos Personalizados de Alta Performance',
  description = 'Uma idéia no papel, é só uma idéia...',
  logo = '/img/logo.svg',
  illustration = '/img/hero-illustration.svg'
}) => (
  <S.Wrapper>
    <main>
      <S.Logo
        src={logo}
        alt="Um Rosto com Capuz, simbolizando o logo, e o nome Phantom Software House ao lado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src={illustration}
        alt="Desenvolvedor sentado de frente para telas com códigos"
      />
      <br />
    </main>
  </S.Wrapper>
)

export default Main
