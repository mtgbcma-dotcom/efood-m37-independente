import styled from 'styled-components'

import { colors } from '../../styles'

export const HeaderArea = styled.header`
  min-height: 384px;
  background-color: ${colors.peach};
  background-image: url('${({ $pattern }) => $pattern}');
  background-repeat: repeat;
`

export const HeaderContent = styled.div`
  min-height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`

export const Logo = styled.img`
  width: 124px;
  height: auto;
`

export const Title = styled.h1`
  margin-top: auto;
  color: ${colors.salmon};
  font-size: 36px;
  line-height: 1.05;
  font-weight: 900;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`
