import {
  Card,
  ImageArea,
  Image,
  Tags,
  Tag,
  Content,
  TopLine,
  Name,
  Rating,
  Star,
  Description,
  More
} from './styles'

const capitalize = (value = '') =>
  value.charAt(0).toUpperCase() + value.slice(1)

const RestaurantCard = ({ restaurant }) => (
  <Card>
    <ImageArea>
      <Image src={restaurant.capa} alt={restaurant.titulo} />

      <Tags>
        {restaurant.destacado && (
          <Tag>Destaque da semana</Tag>
        )}

        <Tag>{capitalize(restaurant.tipo)}</Tag>
      </Tags>
    </ImageArea>

    <Content>
      <TopLine>
        <Name>{restaurant.titulo}</Name>

        <Rating>
          {Number(restaurant.avaliacao).toFixed(1)}
          <Star>★</Star>
        </Rating>
      </TopLine>

      <Description>
        {restaurant.descricao}
      </Description>

      <More to={`/restaurante/${restaurant.id}`}>
        Saiba mais
      </More>
    </Content>
  </Card>
)

export default RestaurantCard
