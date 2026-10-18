import assert from 'node:assert/strict'
import test from 'node:test'
import React, { act } from 'react'
import { createRoot } from 'react-dom/client'
import { MemoryRouter } from 'react-router-dom'
import { JSDOM } from 'jsdom'
import App from '../src/App'
import { Provider } from 'react-redux'
import { createAppStore } from '../src/store'
import cartReducer, { addItem, removeItem, selectTotal, STORAGE_KEY } from '../src/store/cartSlice'
import { RestaurantsProvider, API_URL } from '../src/context/RestaurantsContext'

const fixture = [{id: 7, titulo: 'Restaurante da API', tipo: 'italiana', destacado: true, avaliacao: 4.8, descricao: 'Descrição vinda da API', capa: 'https://example.com/capa.jpg', cardapio: [{id: 81, nome: 'Ravioli', descricao: 'Descrição completa do ravioli', porcao: '1 a 2 pessoas', preco: 69.9, foto: 'https://example.com/ravioli.jpg'}]}]

test('AJAX, rotas por ID, modal, foco, Escape, carrinho e recuperação de erro', async () => {
 const dom = new JSDOM('<div id="root"></div>', {url: 'http://localhost'})
 globalThis.window = dom.window
 globalThis.document = dom.window.document
 globalThis.IS_REACT_ACT_ENVIRONMENT = true
 window.scrollTo = () => {}
 const originalFetch = globalThis.fetch
 let fail = false, calls = 0, root, store
 globalThis.fetch = async (url) => { assert.equal(url, API_URL); calls++; return {ok: !fail, json: async () => fixture} }
 const mount = async (path = '/') => {
  store = createAppStore()
  root = createRoot(document.querySelector('#root'))
  await act(async () => root.render(<MemoryRouter initialEntries={[path]} future={{v7_startTransition: true, v7_relativeSplatPath: true}}><Provider store={store}><RestaurantsProvider><App /></RestaurantsProvider></Provider></MemoryRouter>))
 }
 const click = async element => { assert.ok(element); await act(async () => element.click()) }
 const button = text => [...document.querySelectorAll('button')].find(el => el.textContent.includes(text))
 const escape = async () => act(async () => window.dispatchEvent(new window.KeyboardEvent('keydown', {key: 'Escape'})))
 try {
  await mount()
  assert.equal(calls, 1)
  assert.match(document.querySelector('main').textContent, /Restaurante da API/)
  assert.equal(document.querySelector('main a').getAttribute('href'), '/restaurante/7')
  await click(document.querySelector('main a'))
  assert.equal(document.querySelector('h1').textContent, 'Restaurante da API')
  await click(button('Comprar o produto'))
  assert.match(document.querySelector('[role="dialog"]').textContent, /Descrição completa do ravioli/)
  assert.match(document.querySelector('[role="dialog"]').textContent, /1 a 2 pessoas/)
  assert.match(document.querySelector('[role="dialog"]').textContent, /69,90/)
  assert.equal(document.activeElement.getAttribute('aria-label'), 'Fechar detalhes do produto')
  await escape()
  assert.equal(document.querySelector('[role="dialog"]'), null)
  await click(button('Comprar o produto'))
  await click(button('Adicionar ao carrinho'))
  assert.equal(JSON.parse(window.localStorage.getItem('efood-m37-cart')).length, 1)
  assert.match(document.querySelector('[role="dialog"]').textContent, /Ravioli/)
  assert.equal(store.getState().cart.items.length, 1)
  assert.equal(selectTotal(store.getState()), 69.9)
  await escape()
  await act(async () => root.unmount())
  await mount('/restaurante/7')
  assert.match(button('produto(s)').textContent, /1 produto/)
  await click(button('produto(s)'))
  await click(document.querySelector('[aria-label="Remover Ravioli"]'))
  assert.match(document.querySelector('[role="dialog"]').textContent, /vazio/)
  await act(async () => root.unmount())
  await mount('/carrinho')
  assert.equal(document.querySelector('h1').textContent, 'Carrinho de compras')
  assert.match(document.querySelector('main').textContent, /vazio/)
  await act(async () => root.unmount())
  window.localStorage.setItem(STORAGE_KEY, '{invalido')
  assert.deepEqual(createAppStore().getState().cart.items, [])
  window.localStorage.setItem(STORAGE_KEY, 'null')
  assert.deepEqual(createAppStore().getState().cart.items, [])
  await act(async () => root.unmount())
  fail = true
  await mount()
  assert.match(document.querySelector('[role="alert"]').textContent, /Não foi possível/)
  fail = false
  await click(button('Tentar novamente'))
  assert.match(document.querySelector('main').textContent, /Restaurante da API/)
 } finally {
  if (root) await act(async () => root.unmount())
  globalThis.fetch = originalFetch
  dom.window.close()
  delete globalThis.window
  delete globalThis.document
  delete globalThis.IS_REACT_ACT_ENVIRONMENT
 }
})


test('Redux soma valores diferentes e repetidos, remove uma linha escolhida e preserva o estado', () => {
 const original = cartReducer(undefined, {type: 'init'})
 let cart = cartReducer(original, addItem({id: 1, nome: 'Produto A', preco: 10.10}))
 cart = cartReducer(cart, addItem({id: 2, nome: 'Produto B', preco: 20.20}))
 cart = cartReducer(cart, addItem({id: 1, nome: 'Produto A', preco: 10.10}))
 assert.equal(selectTotal({cart}), 40.40)
 assert.equal(original.items.length, 0)
 assert.notEqual(cart.items[0].cartItemId, cart.items[2].cartItemId)
 cart = cartReducer(cart, removeItem(cart.items[0].cartItemId))
 assert.equal(cart.items.length, 2)
 assert.equal(selectTotal({cart}), 30.30)
 cart = cartReducer(cart, removeItem(cart.items[0].cartItemId))
 cart = cartReducer(cart, removeItem(cart.items[0].cartItemId))
 assert.equal(selectTotal({cart}), 0)
})

