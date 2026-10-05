import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  closeCart,
  removeFromCart,
  selectCartItems,
  selectCartOpen,
  selectCartTotal
} from '../../store/reducers/cart'

import {
  Overlay,
  Drawer,
  EmptyMessage,
  Items,
  CartItem,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  RemoveButton,
  Summary,
  TotalRow,
  ContinueButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Cart = () => {
  const dispatch = useDispatch()

  const isOpen = useSelector(selectCartOpen)
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  useEffect(() => {
    if (!isOpen) return undefined

    document.body.classList.add('modal-open')

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(closeCart())
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, dispatch])

  if (!isOpen) return null

  return (
    <Overlay
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          dispatch(closeCart())
        }
      }}
    >
      <Drawer
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
      >
        {items.length === 0 ? (
          <EmptyMessage>
            O carrinho está vazio.
          </EmptyMessage>
        ) : (
          <>
            <Items>
              {items.map((item) => (
                <CartItem key={item.cartItemId}>
                  <ProductImage
                    src={item.foto}
                    alt={item.nome}
                  />

                  <ProductInfo>
                    <ProductName>
                      {item.nome}
                    </ProductName>

                    <ProductPrice>
                      {formatPrice(item.preco)}
                    </ProductPrice>
                  </ProductInfo>

                  <RemoveButton
                    type="button"
                    aria-label={`Remover ${item.nome}`}
                    title="Remover produto"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.cartItemId)
                      )
                    }
                  >
                    🗑
                  </RemoveButton>
                </CartItem>
              ))}
            </Items>

            <Summary>
              <TotalRow>
                <strong>Valor total</strong>
                <strong>{formatPrice(total)}</strong>
              </TotalRow>

              <ContinueButton
                type="button"
                onClick={() => dispatch(closeCart())}
              >
                Continuar com a entrega
              </ContinueButton>
            </Summary>
          </>
        )}
      </Drawer>
    </Overlay>
  )
}

export default Cart
