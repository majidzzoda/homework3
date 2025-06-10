import "./App.css"
import headerImage from "./assets/Frame.png"
import image1 from "./assets/IMAGE.png"
import imageArticle from "./assets/cubik1.png"
import borya from "./assets/borya.png"
import borya1 from "./assets/borya1.png"
import footer from "./assets/footer.png"
export default function App() {
  return (
    <div>
      <header>
        <img src={headerImage} alt="" />
        <div className="flexak0">
          <ul>
            <li>Overview</li>
            <li>Pages</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
          <button>Purchase Now</button>
        </div>
      </header>
      <main>
        <section className="section1">
          <h1 className="firsth1">MEET LEMON</h1>
          <h1>Build a better site for <br /> enterprise business.</h1>
          <p>Lemon contains a huge selection of common and useful components and layouts <br /> that help you build the best site for your business and clients.</p>
          <img src={image1} alt="" />
          <div className="flexak1">
            <h2>Browse the collection <br /> of layouts & pages.</h2>
            <p>Discover all the components and pages below. <br /> These can be resused across all your projects and <br /> easily customised to suit your brands and projects.</p>
          </div>
        </section>
        <section className="section3">
          <div className="articles1">
            <article>
              <img src={imageArticle} alt="" />
              <p>Layouts</p>
              <b>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod.</b>
            </article>
            <article>
              <img src={imageArticle} alt="" />
              <p>Sections</p>
              <b>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod.</b>
            </article>
            <article>
              <img src={imageArticle} alt="" />
              <p>Components</p>
              <b>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, <br /> sed do eiusmod.</b>
            </article>
          </div>
          <button>Learn more</button>
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>The Landing Pages</p>
          <img src={borya} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>Company Pages</p>
          <img src={borya} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>Overview Pages</p>
          <img src={borya1} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>Overview Pages</p>
          <img src={borya1} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>Overview Pages</p>
          <img src={borya1} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>Overview Pages</p>
          <img src={borya1} alt="" />
        </section>
        <section className="section4">
          <h1>LEMON TEMPLATE</h1>
          <p>The Landing Pages</p>
          <img src={borya} alt="" />
        </section>
      </main>
      <footer>
        <img src={footer} alt="" />
      </footer>
    </div>
  )
}