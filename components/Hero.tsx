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
        <div className="hero-image-grid">
          <div className="hero-card card-1">
            <Image
              src="https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=400&h=300&q=80"
              alt="Vanilla Cupcake"
              width={400}
              height={300}
              priority
            />
          </div>
          <div className="hero-card card-2">
            <Image
              src="https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=400&h=300&q=80"
              alt="Birthday Cake"
              width={400}
              height={300}
            />
          </div>
          <div className="hero-card card-3">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=300&q=80"
              alt="Croissant"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
