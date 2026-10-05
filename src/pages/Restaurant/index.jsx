import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import ProductModal from '../../components/ProductModal'
import logo from '../../assets/logo.png'
import pattern from '../../assets/header-pattern.png'
import { getRestaurantById } from '../../services/api'

import {
  addToCart,
  openCart,
  selectCartCount
} from '../../store/reducers/cart'

import {
  ProfileHeader,
  HeaderContent,
  Back,
  Logo,
  CartButton,
  Hero,
  HeroContent,
  Category,
  RestaurantName,
  Main,
  MenuGrid,
  Message
} from './styles'

const capitalize = (value = '') =>
  value.charAt(0).toUpperCase() + value.slice(1)

const Restaurant = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const [restaurant, setRestaurant] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        setLoading(true)
        setError('')

        const data = await getRestaurantById(id)

        if (!data) {
          setNotFound(true)
          return
        }

        setRestaurant(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurant()
  }, [id])

  const closeModal = useCallback(() => {
    setSelectedProduct(null)
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    closeModal()
  }

  if (notFound) {
    return <Navigate to="/" replace />
  }

  if (loading) {
    return <Message>Carregando restaurante...</Message>
  }

  if (error) {
    return <Message>{error}</Message>
  }

  if (!restaurant) {
    return null
  }

  return (
    <>
      <ProfileHeader $pattern={pattern}>
        <HeaderContent className="container">
          <Back to="/">Restaurantes</Back>

          <Logo
            src={logo}
            alt="efood"
          />

          <CartButton
            type="button"
            onClick={() => dispatch(openCart())}
          >
            {cartCount} produto(s) no carrinho
          </CartButton>
        </HeaderContent>
      </ProfileHeader>

      <Hero $image={restaurant.capa}>
        <HeroContent className="container">
          <Category>
            {capitalize(restaurant.tipo)}
          </Category>

          <RestaurantName>
            {restaurant.titulo}
          </RestaurantName>
        </HeroContent>
      </Hero>

      <Main>
        <MenuGrid className="container">
          {restaurant.cardapio.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onBuy={setSelectedProduct}
            />
          ))}
        </MenuGrid>
      </Main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={closeModal}
        onAdd={handleAddToCart}
      />
    </>
  )
}

export default Restaurant
