import {
  Card,
  Image,
  Title,
  Description,
  BuyButton
} from './styles'

const MenuCard = ({ item, onBuy }) => (
  <Card>
    <Image src={item.foto} alt={item.nome} />

    <Title>{item.nome}</Title>

    <Description>
      {item.descricao}
    </Description>

    <BuyButton
      type="button"
      onClick={() => onBuy(item)}
    >
      Comprar produto
    </BuyButton>
  </Card>
)

export default MenuCard
