import styled from 'styled-components'

import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: grid;
  place-items: center;

  padding: 24px;

  background: ${colors.overlay};
`

export const Modal = styled.div`
  width: min(1024px, 100%);
  min-height: 344px;

  position: relative;

  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  padding: 32px;

  background: ${colors.salmon};
  color: ${colors.white};

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;

  width: 32px;
  height: 32px;

  border: 0;
  background: transparent;
  color: ${colors.white};

  font-size: 32px;
  line-height: 1;
`

export const Image = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  @media (max-width: 720px) {
    width: 100%;
    height: 240px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.h2`
  margin-bottom: 16px;

  font-size: 18px;
  font-weight: 900;
`

export const Description = styled.p`
  color: ${colors.white};
  font-size: 14px;
  line-height: 1.55;
`

export const Portion = styled.p`
  margin-top: 16px;

  color: ${colors.white};
  font-size: 14px;
`

export const AddButton = styled.button`
  margin-top: 16px;
  padding: 8px 10px;
  border: 0;

  background: ${colors.peach};
  color: ${colors.salmon};

  font-size: 14px;
  font-weight: 700;
`
