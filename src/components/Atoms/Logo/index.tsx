import * as S from './styles' /** S = Styles */

export type LogoProps = {
  color?: 'dark' | 'light'
}

const logoDarkPath = '/img/logo.svg'
const logoLightPath = '/img/logo-light.svg'

const Logo = ({ color = 'dark' }: LogoProps) => (
  <S.Logo src={color === 'dark' ? logoDarkPath : logoLightPath} />
)

export default Logo
