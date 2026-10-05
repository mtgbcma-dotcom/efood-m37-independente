import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { getRestaurants } from '../../services/api'

import {
  Main,
  Grid,
  Message,
  RetryButton
} from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadRestaurants = async () => {
    try {
      setLoading(true)
      setError('')

      const data = await getRestaurants()

      setRestaurants(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadRestaurants()
  }, [])

  return (
    <>
      <Header />

      <Main>
        {loading && (
          <Message>
            Carregando restaurantes...
          </Message>
        )}

        {!loading && error && (
          <Message>
            {error}

            <RetryButton
              type="button"
              onClick={loadRestaurants}
            >
              Tentar novamente
            </RetryButton>
          </Message>
        )}

        {!loading && !error && (
          <Grid className="container">
            {restaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </Grid>
        )}
      </Main>

      <Footer />
    </>
  )
}

export default Home
