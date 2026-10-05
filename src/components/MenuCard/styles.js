import styled from 'styled-components'

import { colors } from '../../styles'

export const Card = styled.article`
  min-height: 420px;
  display: flex;
  flex-direction: column;
  padding: 8px;

  background: ${colors.salmon};
  color: ${colors.white};
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Title = styled.h2`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
`

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;

  margin-top: 8px;

  font-size: 14px;
  line-height: 1.45;
`

export const BuyButton = styled.button`
  width: 100%;
  min-height: 34px;
  margin-top: auto;
  border: 0;

  background: ${colors.peach};
  color: ${colors.salmon};

  font-size: 14px;
  font-weight: 700;
`
