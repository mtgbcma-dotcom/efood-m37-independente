import { useEffect } from 'react'

import {
  Overlay,
  Modal,
  CloseButton,
  Image,
  Content,
  Title,
  Description,
  Portion,
  AddButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const ProductModal = ({
  product,
  onClose,
  onAdd
}) => {
  useEffect(() => {
    if (!product) return undefined

    document.body.classList.add('modal-open')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [product, onClose])

  if (!product) return null

  return (
    <Overlay
      role="dialog"
      aria-modal="true"
      aria-label={`Detalhes de ${product.nome}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <Modal>
        <CloseButton
          type="button"
          aria-label="Fechar modal"
          onClick={onClose}
        >
          ×
        </CloseButton>

        <Image
          src={product.foto}
          alt={product.nome}
        />

        <Content>
          <Title>{product.nome}</Title>

          <Description>
            {product.descricao}
          </Description>

          <Portion>
            Serve: {product.porcao}
          </Portion>

          <AddButton
            type="button"
            onClick={() => onAdd(product)}
          >
            Adicionar ao carrinho - {formatPrice(product.preco)}
          </AddButton>
        </Content>
      </Modal>
    </Overlay>
  )
}

export default ProductModal
