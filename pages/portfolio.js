import Link from "next/link"
import Navbar from "../components/navbar"
import Head from "next/head"

function About() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/pone.jpg" className="portfolio-image" />
                <h4 className="portfolio-name">Portfolio One</h4>
                <div className="portfolio-category">
                  Mobile Dev One
                </div>
              </div>
              <div className="portfolio-item">
                <img src="/ptwo.jpg" className="portfolio-image" />
                <h4 className="portfolio-name">Portfolio Two</h4>
                <div className="portfolio-category">
                  Mobile Dev Two
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
