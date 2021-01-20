import React from 'react';
import Baby from '../scss/img/landing-img.jpg';
import Article1 from '../scss/img/article-1.jpg';
import Article2 from '../scss/img/article-2.jpg';
import Article3 from '../scss/img/article-3.jpg';
import { FaArrowCircleRight } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      {/* Hero */}
      <main className="hero">
        <nav className="nav">
          <h3 className="nav__logo">SpectrumScreen+</h3>
          <div className="btn-wrap">
            <button className="nav__login">Log In</button>
            <button className="nav__signup">Sign Up</button>
          </div>
        </nav>
        <img src={Baby} alt="baby" className="hero__img" />
      </main>

      {/* Mid Section */}
      <section className="section">
        <div className="test">
          <h3 className="test__heading">Test your child</h3>
          <p className="test__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem deserunt optio omnis
            ipsa tempora.
          </p>
          <button className="test__button">TEST</button>
        </div>
        <div className="test">
          <h3 className="test__heading">Latest Articles</h3>
          <p className="test__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem deserunt optio omnis
            ipsa tempora.
          </p>
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <section className="articles">
        <article className="article">
          <img src={Article1} alt="article-1" className="article__img" />
          <h4 className="article__title">Article Title</h4>
          <p className="article__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio magnam dignissimos libero
            commodi repellat deserunt, quam inventore unde ratione est perferendis id.
          </p>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="article__btn"
          >
            <FaArrowCircleRight />
          </a>
        </article>
        <article className="article">
          <img src={Article2} alt="article-2" className="article__img" />
          <h4 className="article__title">Article Title</h4>
          <p className="article__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio magnam dignissimos libero
            commodi repellat deserunt, quam inventore unde ratione est perferendis id.
          </p>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="article__btn"
          >
            <FaArrowCircleRight />
          </a>
        </article>
        <article className="article">
          <img src={Article3} alt="article-3" className="article__img" />
          <h4 className="article__title">Article Title</h4>
          <p className="article__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio magnam dignissimos libero
            commodi repellat deserunt, quam inventore unde ratione est perferendis id.
          </p>
          <a
            href="http://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="article__btn"
          >
            <FaArrowCircleRight />
          </a>
        </article>
      </section>
    </>
  );
};

export default Home;
