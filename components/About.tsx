import Image from 'next/image'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Us</span>
          <h2 className="section-title">Baking Memories Since 2020</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              At Sweet Crumbs, we believe that every bite should be a moment of pure joy. Our bakery was born from a passion for creating treats that not only taste amazing but bring people together.
            </p>
            <p>
              Using only the finest ingredients, traditional techniques, and a dash of creativity, our talented bakers craft each item with meticulous attention to detail. From fluffy cupcakes to elaborate celebration cakes, every creation is a work of art.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Unique Recipes</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&h=400&q=80"
              alt="Our Bakery"
              width={600}
              height={400}
              priority
            />
            <div className="floating-badge">
              <i className="fas fa-award"></i>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
