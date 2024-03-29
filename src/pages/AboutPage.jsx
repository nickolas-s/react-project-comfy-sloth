import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => (
  <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="living room" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          mollitia? Ea ducimus id nihil cupiditate dolore maxime perspiciatis,
          et hic veritatis, incidunt odit possimus ut voluptatibus distinctio
          doloremque. Praesentium molestias nobis quisquam ad quos minus
          laudantium ea totam quaerat perferendis. A, ratione aliquid amet qui
          placeat eum officia hic dicta?
        </p>
      </article>
    </Wrapper>
  </main>
);

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
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
`;
export default AboutPage;
