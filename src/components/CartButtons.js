import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
const CartButton = () => {
  const { closeSidebar } = useProductsContext()
  const { total_items} = useCartContext()
  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        <FiShoppingCart/>
        <span className='cart-value'>{total_items}</span>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    display: flex;
    align-item: center;
    font-size: 2rem;
    color: var(--clr-grey-1);
    position: relative;
    height: 2rem;
    margin-left: 160px;
    background: transparent;
    &:hover {
      color:var(--clr-primary-5);
    }
  }
  .cart-value {
    display: flex;
    align-items: center;
    position: absolute;
    top: -6px;
    right: -12px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    justify-content: center;
    border-radius: 100%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
`
export default CartButton
