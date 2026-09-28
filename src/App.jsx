import "./App.css";
const products = [
  {
    id: 1,
    name: "Wedding Silk Saree",
    category: "Sarees",
    price: "₹6,999",
    image: "/images/wedding-saree.jpeg",
  },
  {
    id: 2,
    name: "Banarasi Silk Saree",
    category: "Sarees",
    price: "₹3,999",
    image: "/images/banarasi.jpeg",
  },
  {
    id: 3,
    name: "Designer Ethnic Saree",
    category: "Sarees",
    price: "₹2,999",
    image: "/images/designer.jpeg",
  },
  {
    id: 4,
    name: "Traditional Lehenga",
    category: "Lehengas",
    price: "₹5,499",
    image: "/images/lehenga.jpeg",
  },
  {
    id: 5,
    name: "Festive Anarkali",
    category: "Anarkali",
    price: "₹2,499",
    image: "/images/anarkali.jpeg",
  },
  {
    id: 6,
    name: "Cotton Ethnic Kurti",
    category: "Kurtis",
    price: "₹1,299",
    image: "/images/cotton-kurti.jpeg",
  },
];

function App() {
  const whatsappNumber = "919640133666";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20TATHVA,%20I%20would%20like%20to%20know%20more%20about%20your%20ethnic%20collection.`,
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">
          TATHVA
          <span>ETHNIC WEAR</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-whatsapp" onClick={openWhatsApp}>
          WhatsApp
        </button>
      </nav>


      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-content">

          <p className="small-title">
            TRADITION • ELEGANCE • STYLE
          </p>

          <h1>
            Celebrate Your
            <br />
            <span>Ethnic Elegance</span>
          </h1>

          <p className="hero-text">
            Discover beautiful ethnic wear designed to make
            every celebration special.
          </p>

          <div className="hero-buttons">

            <a href="#collection" className="primary-btn">
              Explore Collection
            </a>

            <button className="secondary-btn" onClick={openWhatsApp}>
              Chat on WhatsApp
            </button>

          </div>

        </div>

        <div className="hero-image">
          <img
           src="/images/beauty.jpeg"
            alt="TATHVA Ethnic Collection"
          />
        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <div className="feature">
          <div className="feature-icon">✦</div>
          <h3>Traditional Designs</h3>
          <p>Beautiful ethnic styles for every occasion.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">♡</div>
          <h3>Quality Collection</h3>
          <p>Selected fabrics with elegant designs.</p>
        </div>

        <div className="feature">
          <div className="feature-icon">✧</div>
          <h3>Festive Fashion</h3>
          <p>Perfect outfits for weddings and celebrations.</p>
        </div>

      </section>


      {/* COLLECTION */}

      <section className="collection" id="collection">

        <div className="section-heading">

          <p>OUR COLLECTION</p>

          <h2>
            Timeless <span>Ethnic Wear</span>
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Explore our collection of elegant ethnic outfits
            crafted for modern women who love tradition.
          </p>

        </div>


        <div className="products">

          {products.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="category">
                  {product.category}
                </span>

              </div>

              <div className="product-info">

                <h3>{product.name}</h3>

                <div className="product-bottom">

                  <span className="price">
                    {product.price}
                  </span>

                  <button
                    className="buy-btn"
                    onClick={openWhatsApp}
                  >
                    Enquire
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ABOUT */}

      <section className="about" id="about">

        <div className="about-image">

          <img
            src="/images/designer.jpeg"
            alt="Traditional ethnic fashion"
          />

        </div>

        <div className="about-content">

          <p className="about-title">
            ABOUT TATHVA
          </p>

          <h2>
            Tradition Meets
            <span> Modern Elegance</span>
          </h2>

          <p>
            TATHVA is an ethnic clothing destination dedicated
            to bringing beautiful traditional fashion to modern
            women.
          </p>

          <p>
            From elegant sarees and festive lehengas to stylish
            kurtis and anarkalis, our collection is carefully
            selected for weddings, festivals and special occasions.
          </p>

          <button onClick={openWhatsApp} className="primary-btn">
            Contact TATHVA
          </button>

        </div>

      </section>


      {/* STORE DETAILS */}

      <section className="store-section" id="contact">

        <div className="section-heading">

          <p>VISIT OUR STORE</p>

          <h2>
            Come & <span>Shop With Us</span>
          </h2>

          <div className="heading-line"></div>

        </div>


        <div className="store-container">

          {/* ADDRESS */}

          <div className="store-card">

            <div className="store-icon">
              📍
            </div>

            <h3>Store Address</h3>

            <p>
              TATHVA
              <br />
              Anala Venkatappa Rao Rd,
              <br />
              Opp. Ratnadeep Supermarket,
              <br />
              Near GAIL Office,
              <br />
              Cyclone Colony,
              <br />
              Rajamahendravaram,
              <br />
              Andhra Pradesh - 533103
            </p>

            <a
              className="map-btn"
              href="https://www.google.com/maps/search/?api=1&query=TATHVA+Anala+Venkatappa+Rao+Road+Rajamahendravaram+Andhra+Pradesh+533103"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>

          </div>


          {/* CONTACT */}

          <div className="store-card">

            <div className="store-icon">
              📞
            </div>

            <h3>Contact Us</h3>

            <p>
              Call us for product enquiries,
              availability and store information.
            </p>

            <a
              href="tel:+919640133666"
              className="contact-number"
            >
              9640133666
            </a>

            <button
              className="whatsapp-large"
              onClick={openWhatsApp}
            >
              💬 WhatsApp Us
            </button>

          </div>


          {/* TIMINGS */}

          <div className="store-card">

            <div className="store-icon">
              🕒
            </div>

            <h3>Store Timings</h3>

            <div className="timings">

              <div>
                <span>Monday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div>
                <span>Tuesday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div>
                <span>Wednesday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div>
                <span>Thursday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div>
                <span>Friday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div>
                <span>Saturday</span>
                <b>10:30 AM - 9:00 PM</b>
              </div>

              <div className="sunday">
                <span>Sunday</span>
                <b>2:30 PM - 9:00 PM</b>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="cta">

        <div>

          <p>FIND YOUR PERFECT ETHNIC LOOK</p>

          <h2>
            Make Every Occasion
            <span> Beautiful</span>
          </h2>

          <p>
            Visit TATHVA and discover your next favourite outfit.
          </p>

          <button
            onClick={openWhatsApp}
            className="cta-button"
          >
            WhatsApp: 9640133666
          </button>

        </div>

      </section>


      {/* FOOTER */}

      <footer>

        <div className="footer-logo">
          TATHVA
          <span>ETHNIC WEAR</span>
        </div>

        <p>
          Tradition • Elegance • Style
        </p>

        <div className="footer-contact">
          📞 9640133666
          &nbsp; | &nbsp;
          💬 WhatsApp 9640133666
        </div>

        <p className="copyright">
          © 2026 TATHVA Ethnic Wear. All Rights Reserved.
        </p>

      </footer>


      {/* FLOATING WHATSAPP */}

      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="WhatsApp"
      >
        💬
      </button>

    </div>
  );
}

export default App;