import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah J.",
      role: "Regular Customer",
      image: "/OIP.jpg",
      text: "The best cupcakes I've ever had! So moist and the frosting is perfect. Sweet Crumbs has become my go-to for every celebration.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Newlywed",
      image: "/OIP (1).jpg",
      text: "Ordered my wedding cake from Sweet Crumbs and it was absolutely stunning AND delicious. All our guests couldn't stop raving about it!",
      rating: 5
    },
    {
      name: "Emily T.",
      role: "Food Blogger",
      image: "/strawberry cupcake.jpg",
      text: "Their croissants are legitimately the best in the city. Flaky, buttery perfection. Coffee is great too!",
      rating: 4.5
    }
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>)
    }
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>)
    }

    return stars
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="testimonial-text">&quot;{testimonial.text}&quot;</p>
              <div className="testimonial-author">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                />
                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
