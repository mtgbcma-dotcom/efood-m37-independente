import styled from 'styled-components'

import { colors } from '../../styles'

export const Main = styled.main`
  min-height: 400px;
  padding-top: 80px;
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const Message = styled.div`
  width: min(600px, calc(100% - 32px));
  margin: 0 auto;

  padding: 32px;

  border: 1px solid ${colors.salmon};
  background: ${colors.white};

  text-align: center;
  font-size: 16px;
`

export const RetryButton = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 8px 16px;

  border: 0;

  background: ${colors.salmon};
  color: ${colors.white};

  font-weight: 700;
`
