import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import matchaRGB from '../pictures/matcha-RGB.jpg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={matchaRGB} alt='matcha-rgb-60%' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            At Overclock Builds, we understand that the keyboard is the bridge between creator and creation.
            Our commitment is to redefine this experience by crafting custom keyboards that resonate with 
            individuality and performance. Every keyboard we craft is a reflection of our dedication to 
            unparalleled quality, innovative design, and the belief that each keystroke should feel both
            effortless and empowering. Whether you're a seasoned programmer, an avid writer, or a passionate
            gamer, our creations ensure every keystroke feels deliberate and satisfying. Dive into a realm
            where functionality meets artistry, where every key tells your story. Discover Overclock Builds.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
