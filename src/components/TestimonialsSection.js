import React from 'react';
import '../components/TestimonialsSection.css';

const testimonials = [
  {
    name: 'Huss Khosravi',
    stars: 5,
    text: 'Abbass and his team are highly professional and knowledgeable. He genuinely care about his clients. He provides clear, honest advice and goes the extra mile to help people achieve their property and business goals. His expertise, integrity and dedication make him a trusted advisor in the industry. Highly recommended!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURnNWFMLVJnEAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgMDg5aL-Rg%7CCgwI59X6vQYQ0PT8_QE%7C?hl=en'
  },
  {
    name: 'Agust',
    stars: 5,
    text: 'I had a great experience with the Abbas Group. The team was outstanding! very professional, friendly, and welcoming from the start. They were always willing to help, offering clear advice and support whenever I needed it. I was impressed by how knowledgeable and approachable everyone was, making it easy to learn and feel comfortable. Abbas Group has a fantastic team that truly stands out for their dedication and teamwork. I highly recommend them!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMzcDhYREZnEAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIC3p8XDFg%7CCgwIjNm_uQYQ4LONpAI%7C?hl=en'
  },
  {
    name: 'kiran dhawan',
    stars: 5,
    text: '"I wanted to express my gratitude to Asif for his exceptional assistance. He worked diligently to provide me with all the necessary information, answering my questions thoroughly and professionally. His dedication and expertise were truly impressive. Thank you, Asif, for your outstanding support!"',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURRLWZ6eHBBRRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgMDQ-fzxpAE%7CCgwI95XFvgYQiOCs5QE%7C?hl=en'
  },
  {
    name: 'Dan Laki (Dan4)',
    stars: 5,
    text: 'My experience with Abbass Group was exceptional. As someone new to the process of purchasing a business, Sadeq made everything smooth and seamless. He was informative, responsive, and took the time to answer all of my questions in detail. I would definitely work with them again.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURnMWUtbGdRRRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgMDg1e-lgQE%7CCgsIhK77vQYQkKz4PQ%7C?hl=en'
  },
  {
    name: 'nik tribhuvan',
    stars: 5,
    text: 'Sadeq and his team are incredible. They are quite knowledgeable and diligent. Their service is incredible. All my communication were promptly responded to. All my questions and queries were satisfactorily addressed. Made the entire process smooth and assuring. Great team to have by your corner regardless what your needs are. Highly recommend Sadeq and his team.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURnX3M3bWVnEAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgMDg_s7meg%7CCgwI9OP0vQYQsNKBzQM%7C?hl=en'
  },
  {
    name: 'Jason Murphy',
    stars: 5,
    text: 'The team\'s negotiation skills and level of service and commitment was unparalleled. Highly recommended!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMzaFlpbDd3RRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIC3hYil7wE%7CCgwI3-WxuQYQwIn4xwI%7C?hl=en'
  },
  {
    name: 'Oli Brunton',
    stars: 5,
    text: 'A+',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUN3eUxpN3ZnRRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgMCwyLi7vgE%7CCgwI3Y_avgYQ4Kqs7gI%7C?hl=en'
  },
  {
    name: 'Jordan Thomas',
    stars: 5,
    text: 'Definitely recommend Sadeq and the team at Abbass Group for brokerage services for your business. From the initial meeting, what was meant to be a  very difficult and emotional process was met with the utmost professionalism and sincerity, unlike a lot of the others out there. Always clear in their communication with weekly updates, but also candid in the market feedback they observe. I was able to rest assured knowing these guys were working around the clock to fulfill a quick sale of my business which is what I had requested. Not to mention all for a very reasonable fee. Thank you team and all the best.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUMzdVlIa01REAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIC3uYHkMQ%7CCgwIlZOxuQYQ2K7DpwM%7C?hl=en'
  },
  {
    name: 'Adisha Fernando',
    stars: 5,
    text: 'Abbass Brokers was instrumental in helping us find the perfect buyer. Their market knowledge and negotiation skills are on another level. Highly Recommended..!!',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMzNGJuNWlnRRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIC34bn5igE%7CCgsI-IStuQYQwMSqGw%7C?hl=en'
  },
  {
    name: 'BA & LH P',
    stars: 5,
    text: 'I work with Sadeq on a few sale and purchase of business transactions over the last few months. He\'s professional, patient, with in-depth industrial knowledge and reliable to work with. I would definitely recommend him to any sellers who wish to sell their business! Lei Praytil (principal lawyer)',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQ3MXBDaFlBEAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgID71pChYA%7CCgwIx_CltgYQsPT9lQI%7C?hl=en'
  },
  {
    name: 'Rahul Arora',
    stars: 5,
    text: 'I recently bought a café through Sadeq at Abbass Business Brokers, and I couldn\'t be happier with the experience. Sadeq was professional, knowledgeable, and made the process smooth and stress-free. He provided clear information and handled any issues quickly. I highly recommend Sadeq for anyone looking to buy or sell a business.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUQ3bU11b05REAE!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgID7mMuoNQ%7CCgwImOqUtgYQsJrBswI%7C?hl=en'
  },
  {
    name: 'Imogen Hammond',
    stars: 5,
    text: 'Sadeq was absolutely fabulous to work with! He is thorough, diligent and overall a delight to work with. i would highly recommend him to potential clients. Thanks again, Sadeq.',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR6bGY2VG5nRRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIDzlf6TngE%7CCgoI1_WfswYQoMUd%7C?hl=en'
  },
  {
    name: 'Rodney Nieuwenhuizen',
    stars: 5,
    text: 'Sadeq was very helpful and guided us through all our property needs',
    reviewUrl: 'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURUNThfSW93RRAB!2m1!1s0x0:0xfb2dbe8e30fc8b57!3m1!1s2@1:CIHM0ogKEICAgIDT58_IowE%7CCgwIqY7asgYQsODOmQI%7C?hl=en'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials" style={{ backgroundImage: `linear-gradient(rgba(41, 43, 44, 0.6), rgba(41, 43, 44, 0.6)), url('https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80')` }}>
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from our satisfied clients about their experience with Global Properties</p>
        </div>
        <div className="testimonials-scroll-container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => {
              const isLongText = testimonial.text.length > 120;
              const displayText = isLongText 
                ? `${testimonial.text.substring(0, 100).trim()}...` 
                : testimonial.text;
              
              return (
                <a 
                  href={testimonial.reviewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="testimonial-card" 
                  key={index}
                >
                  <div className="testimonial-rating">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                  <p className="testimonial-text">
                    {displayText}
                  </p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 