import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ProfileHeader = styled.header`
  min-height: 186px;

  background-color: ${colors.peach};
  background-image: url('${({ $pattern }) => $pattern}');
  background-repeat: repeat;
`

export const HeaderContent = styled.div`
  min-height: 186px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 24px 0;
  }
`

export const Back = styled(Link)`
  color: ${colors.salmon};

  text-decoration: none;
  font-size: 18px;
  font-weight: 900;
`

export const Logo = styled.img`
  width: 124px;
`

export const CartButton = styled.button`
  justify-self: end;

  border: 0;
  background: transparent;

  color: ${colors.salmon};

  font-size: 18px;
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: 680px) {
    justify-self: center;
  }
`

export const Hero = styled.section`
  height: 280px;

  background:
    linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    url('${({ $image }) => $image}') center / cover no-repeat;
`

export const HeroContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 24px 0 30px;

  color: ${colors.white};
`

export const Category = styled.span`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 300;

  white-space: normal;
  overflow: visible;
`

export const RestaurantName = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 900;
`

export const Main = styled.main`
  min-height: 400px;
  padding-top: 56px;
`

export const MenuGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.div`
  margin: 80px auto;
  text-align: center;
`
