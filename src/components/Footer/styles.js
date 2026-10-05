import styled from 'styled-components'

import { colors } from '../../styles'

export const FooterArea = styled.footer`
  margin-top: 80px;
  background: ${colors.peach};
`

export const FooterContent = styled.div`
  min-height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 28px;
`

export const Logo = styled.img`
  width: 124px;
`

export const Socials = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 28px;
`

export const Social = styled.span`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 900;
`

export const Disclaimer = styled.p`
  max-width: 560px;
  margin-top: auto;
  color: ${colors.salmon};
  font-size: 10px;
  line-height: 1.25;
  text-align: center;
`
