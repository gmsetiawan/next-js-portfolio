import Link from "next/link"
import Navbar from "../components/navbar"
import Head from "next/head"

function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact</h1>
            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <ul className="contact-links">
              <li className="contact-item">Email:</li>
              <li className="contact-item">Whatsapp:</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
