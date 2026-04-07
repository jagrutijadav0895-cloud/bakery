import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Freshly Baked <span className="highlight">Happiness</span> Everyday
        </h1>
        <p className="hero-subtitle">
          Indulge in handcrafted pastries, decadent cakes, and artisan treats made with love and the finest ingredients
        </p>
        <div className="hero-buttons">
          <a href="#menu" className="btn btn-primary">Order Now</a>
          <a href="#about" className="btn btn-secondary">Our Story</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-container">
          <Image
            src="/OIP.jpg"
            alt="Fresh Bakery Selection - Croissants, Cakes, and Pastries"
            width={800}
            height={600}
            priority
            className="hero-main-image"
          />
        </div>
      </div>
    </section>
  )
}
