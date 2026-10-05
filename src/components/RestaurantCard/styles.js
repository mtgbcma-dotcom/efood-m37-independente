import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const Card = styled.article`
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
`

export const ImageArea = styled.div`
  height: 217px;
  position: relative;
  overflow: hidden;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  left: 16px;
  z-index: 2;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px;

  pointer-events: none;
`

export const Tag = styled.span`
  flex: 0 0 auto;
  min-width: max-content;
  padding: 6px 8px;

  background: ${colors.salmon};
  color: ${colors.white};

  font-size: 12px;
  line-height: 1;
  font-weight: 700;

  white-space: nowrap;
  overflow: visible;
  text-overflow: clip;
`

export const Content = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`

export const Name = styled.h2`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
`

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;

  font-size: 18px;
  font-weight: 700;
`

export const Star = styled.span`
  color: ${colors.gold};
  font-size: 20px;
`

export const Description = styled.p`
  margin-top: 16px;
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 1.55;
`

export const More = styled(Link)`
  width: fit-content;
  margin-top: auto;
  padding: 7px 10px;

  background: ${colors.salmon};
  color: ${colors.white};

  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
`
