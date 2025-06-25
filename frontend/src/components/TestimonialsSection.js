import React from 'react';
import '../components/TestimonialsSection.css';

const testimonials = [
  {
    name: 'Huss Khosravi',
    stars: 5,
    text: 'Abbass and his team are highly professional and knowledgeable. He genuinely care about his clients. He provides clear, honest advice and goes the extra mile to help people achieve their property and business goals. His expertise, integrity and dedication make him a trusted advisor in the industry. Highly recommended!'
  },
  {
    name: 'Agust',
    stars: 5,
    text: 'I had a great experience with the Abbas Group. The team was outstanding! very professional, friendly, and welcoming from the start. They were always willing to help, offering clear advice and support whenever I needed it. I was impressed by how knowledgeable and approachable everyone was, making it easy to learn and feel comfortable. Abbas Group has a fantastic team that truly stands out for their dedication and teamwork. I highly recommend them!'
  },
  {
    name: 'kiran dhawan',
    stars: 5,
    text: '"I wanted to express my gratitude to Asif for his exceptional assistance. He worked diligently to provide me with all the necessary information, answering my questions thoroughly and professionally. His dedication and expertise were truly impressive. Thank you, Asif, for your outstanding support!"'
  },
  {
    name: 'Dan Laki',
    stars: 5,
    text: 'My experience with Abbass Group was exceptional. As someone new to the process of purchasing a business, Sadeq made everything smooth and seamless. He was informative, responsive, and took the time to answer all of my questions in detail. I would definitely work with them again.'
  },
  {
    name: 'nik tribhuvan',
    stars: 5,
    text: 'Sadeq and his team are incredible. They are quite knowledgeable and diligent. Their service is incredible. All my communication were promptly responded to. All my questions and queries were satisfactorily addressed. Made the entire process smooth and assuring. Great team to have by your corner regardless what your needs are. Highly recommend Sadeq and his team.'
  },
  {
    name: 'Jason Murphy',
    stars: 5,
    text: 'The team\'s negotiation skills and level of service and commitment was unparalleled. Highly recommended!'
  },
  {
    name: 'Oli Brunton',
    stars: 5,
    text: 'A+'
  },
  {
    name: 'Jordan Thomas',
    stars: 5,
    text: 'Definitely recommend Sadeq and the team at Abbass Group for brokerage services for your business. From the initial meeting, what was meant to be a  very difficult and emotional process was met with the utmost professionalism and sincerity, unlike a lot of the others out there. Always clear in their communication with weekly updates, but also candid in the market feedback they observe. I was able to rest assured knowing these guys were working around the clock to fulfill a quick sale of my business which is what I had requested. Not to mention all for a very reasonable fee. Thank you team and all the best.'
  },
  {
    name: 'Adisha Fernando',
    stars: 5,
    text: 'Abbass Brokers was instrumental in helping us find the perfect buyer. Their market knowledge and negotiation skills are on another level. Highly Recommended..!!'
  },
  {
    name: 'BA & LH P',
    stars: 5,
    text: 'I work with Sadeq on a few sale and purchase of business transactions over the last few months. He\'s professional, patient, with in-depth industrial knowledge and reliable to work with. I would definitely recommend him to any sellers who wish to sell their business! Lei Praytil (principal lawyer)'
  },
  {
    name: 'Rahul Arora',
    stars: 5,
    text: 'I recently bought a café through Sadeq at Abbass Business Brokers, and I couldn\'t be happier with the experience. Sadeq was professional, knowledgeable, and made the process smooth and stress-free. He provided clear information and handled any issues quickly. I highly recommend Sadeq for anyone looking to buy or sell a business.'
  },
  {
    name: 'Imogen Hammond',
    stars: 5,
    text: 'Sadeq was absolutely fabulous to work with! He is thorough, diligent and overall a delight to work with. i would highly recommend him to potential clients. Thanks again, Sadeq.'
  },
  {
    name: 'Rodney Nieuwenhuizen',
    stars: 5,
    text: 'Sadeq was very helpful and guided us through all our property needs'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Hear from our satisfied clients about their experience with the ABBASS Group.</p>
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
                  href="https://www.google.com/maps/place/ABBASS+Group/@-37.8334177,144.9689324,17z/data=!3m1!5s0x6ad66a069c899f3f:0x9d81abb30ae90fd3!4m6!3m5!1s0x8c7b19e1dd54ed87:0xfb2dbe8e30fc8b57!8m2!3d-37.8334177!4d144.9715073!16s%2Fg%2F11w3yyg1zj?hl=en&entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" 
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