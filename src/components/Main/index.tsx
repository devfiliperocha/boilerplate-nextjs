import * as S from './styles' /** S = Styles */

const Main = () => (
  <S.Wrapper>
    <main>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e NextJS Na prática escrito ao lado"
      />
      <S.Title>NextJS Na Prática</S.Title>
      <S.Description>
        TypeScript, React JS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor sentado de frente para telas com códigos"
      />
    </main>
  </S.Wrapper>
)

export default Main
