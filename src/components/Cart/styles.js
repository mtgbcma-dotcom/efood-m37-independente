import styled from 'styled-components'

import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;

  background: rgba(0, 0, 0, 0.78);
`

export const Drawer = styled.aside`
  width: min(360px, 100%);
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;

  overflow-y: auto;

  padding: 8px;

  background: ${colors.salmon};
`

export const EmptyMessage = styled.p`
  margin: 32px 16px;

  color: ${colors.white};

  font-size: 16px;
  font-weight: 700;
  text-align: center;
`

export const Items = styled.div`
  display: grid;
  gap: 12px;
`

export const CartItem = styled.article`
  min-height: 100px;

  position: relative;

  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 8px;
  align-items: start;

  padding: 8px;

  background: ${colors.peach};
  color: ${colors.salmon};
`

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;

  object-fit: cover;
`

export const ProductInfo = styled.div`
  min-width: 0;
`

export const ProductName = styled.h3`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 900;
`

export const ProductPrice = styled.p`
  margin-top: 12px;

  font-size: 14px;
  line-height: 1.3;
`

export const RemoveButton = styled.button`
  width: 24px;
  height: 24px;

  align-self: end;

  border: 0;
  background: transparent;

  color: ${colors.salmon};

  font-size: 16px;
  line-height: 1;
`

export const Summary = styled.div`
  margin-top: 32px;

  color: ${colors.white};
`

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 16px;

  font-size: 14px;
`

export const ContinueButton = styled.button`
  width: 100%;
  min-height: 32px;

  margin-top: 16px;

  border: 0;

  background: ${colors.peach};
  color: ${colors.salmon};

  font-size: 14px;
  font-weight: 700;
`
