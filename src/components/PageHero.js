import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 8rem;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-1);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-5);
  }
`

export default PageHero
