import '../testimonials/testimonials.css'
import { useState, useEffect  } from "react";

const API_BASE_URL = "https://win24-assignment.azurewebsites.net";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  // Hämta testimonials från API:t
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/testimonials`)
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);




  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-item">
          <img src={testimonial.avatarUrl} alt={testimonial.author} />
          <h3>{testimonial.author} ({testimonial.jobRole})</h3>
          <p>Rating: {testimonial.starRating} / 5</p>
          <p>{testimonial.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

