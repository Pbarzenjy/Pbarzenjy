import { useState, useEffect  } from "react";
import '../section-five/section-five.css'; 
import Pic from '../../../public/images/sectionfive/pic.png';

const API_BASE_URL = "https://win24-assignment.azurewebsites.net";

const SectionFive = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/testimonials`)
      .then((response) => response.json())
      .then((data) => {setTestimonials(data); console.log("data för testimonials  ", data)})
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="section-five">
      <div className='section'>
        <div className="section-five-customers">
          <h2>Clients are Loving Our App</h2>
          
          {testimonials.map((testimonial) => (
            <div className="section-five-customers-one" key={testimonial.id}>
              <div className="testimonial-bubble">
                <div className="qoute">
                  <img src={Pic} alt="Quote Icon" />
                </div>   
                <div style={{display:"flex" }}>
                     
               {Array.from({ length: 5 }).map((_, i) => (
               <div className="stars" key={i}>
                 <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <polygon
                     points="25,0 32,15 50,15 35,25 40,40 25,30 10,40 15,25 0,15 18,15"
                     fill={i < testimonial.starRating ? "#ffcc00" : "none"}  
                     stroke={i < testimonial.starRating ? "#ffcc00" : "#cccccc"}  
                     strokeWidth="2"
                                      />
                           </svg>
                          </div>
                          ))}


</div>

                <p>{testimonial.comment}</p>

                <div className="testimonial-bubble-photo-parent">
                  <div>
                    <img src={testimonial.avatarUrl} alt={testimonial.author} />
                  </div>
                  <div className="testimonial-bubble-name">
                    <h5>{testimonial.author}</h5>
                    <p>{testimonial.jobRole}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SectionFive;
