import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative floating elements */}
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">
          <i className="fas fa-bread-slice"></i>
          <span>Artisan Bakery Since 2020</span>
        </div>
        <h1 className="hero-title">
          Freshly Baked <span className="highlight">Happiness</span> Everyday
        </h1>
        <p className="hero-subtitle">
          Indulge in handcrafted pastries, decadent cakes, and artisan treats made with love and the finest ingredients
        </p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary pulse-btn">
            <i className="fas fa-shopping-bag"></i> Order Now
          </a>
          <a href="#about" className="btn btn-secondary magnetic-btn">
            <i className="fas fa-heart"></i> Our Story
          </a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <span className="trust-number">50K+</span>
            <span className="trust-label">Happy Customers</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">100+</span>
            <span className="trust-label">Fresh Items Daily</span>
          </div>
          <div className="trust-divider"></div>
          <div className="trust-item">
            <span className="trust-number">5★</span>
            <span className="trust-label">Rated</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-wrapper">
          <div className="hero-glow"></div>
          <div className="hero-image-container">
            <Image
              src="/OIP.jpg"
              alt="Fresh Bakery Selection - Croissants, Cakes, and Pastries"
              width={800}
              height={600}
              priority
              className="hero-main-image"
            />
            <div className="hero-badge">
              <i className="fas fa-award"></i>
              <span>Award Winning</span>
            </div>
          </div>
          <div className="floating-card card-1">
            <i className="fas fa-star"></i>
            <span>4.9 Rating</span>
          </div>
          <div className="floating-card card-2">
            <i className="fas fa-clock"></i>
            <span>Fresh Daily</span>
          </div>
        </div>
      </div>
    </section>
  )
}
