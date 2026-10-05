import logo from '../../assets/logo.png'

import {
  FooterArea,
  FooterContent,
  Logo,
  Socials,
  Social,
  Disclaimer
} from './styles'

const Footer = () => (
  <FooterArea>
    <FooterContent className="container">
      <Logo src={logo} alt="efood" />

      <Socials>
        <Social>◎</Social>
        <Social>f</Social>
        <Social>♥</Social>
      </Socials>

      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Disclaimer>
    </FooterContent>
  </FooterArea>
)

export default Footer
