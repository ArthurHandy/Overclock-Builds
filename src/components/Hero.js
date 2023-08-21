import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='bg'>
      <Wrapper className='section'>
          <article className='content'>
            <h1>
              Built To <br />
              Perfection
            </h1>
            <p>
              At our store, you're not just buying a keyboard; you're creating an extension of your identity.
              Choose from a variety of sizes, personalized switches types for that perfect feel, and striking
              keycap design that matches your style. We offer only 60% and 65% keyboards.
            </p>
            <Link to='/products' className='btn hero-btn'>
              shop now
            </Link>
          </article>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding-left: 20px;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
  }
`

export default Hero
