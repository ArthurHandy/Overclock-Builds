import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
const Nav = () => {
  const { openSidebar } = useProductsContext()
  const { myUser } = useUserContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <Logo />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
          {myUser && (
            <li>
              <Link to='/checkout'>checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  background: var(--clr-grey-9);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 100%;
    margin: 0;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      grid-gap: 75px;
    }
    .nav-links {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      li {
        margin: 0rem;
        padding-bottom: 4px;
      }
      a {
        color:var(--clr-grey-1);
        font-size: 20px;
        font-family: 'Chubbo', sans-serif;
        letter-spacing: var(--spacing);
        text-transform: capitalize;
        padding: 0.5rem;
        &:hover {
          color:var(--clr-primary-5);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
