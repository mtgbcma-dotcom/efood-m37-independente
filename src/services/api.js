const API_URL =
  'https://api-ebac.vercel.app/api/efood/restaurantes'

export async function getRestaurants() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Não foi possível carregar os restaurantes.')
  }

  return response.json()
}

export async function getRestaurantById(id) {
  const restaurants = await getRestaurants()

  return restaurants.find(
    (restaurant) => String(restaurant.id) === String(id)
  )
}
