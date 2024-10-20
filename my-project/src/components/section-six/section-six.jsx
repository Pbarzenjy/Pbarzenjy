import { useState, useEffect } from 'react';
import '../section-six/section-six.css';
import telefon from '../../../public/images/sectionsix/telefon.png';
import Group from '../../../public/images/sectionsix/Group.png';

const API_BASE_URL = "https://win24-assignment.azurewebsites.net";

const SectionSix = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Hämta FAQ-data från API:t
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/faq`)
      .then(response => response.json())
      .then(data => setFaqData(data))
      .catch(error => console.error('Error fetching FAQ:', error));
  }, []);

  // Hantera visning/gömning av FAQ-svar
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="section-six">
        <div className="section">
          <div className="section-six">
         <div>
            <div><h2>Any questions? Check out the FAQs</h2>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div> 

          
           <div className="contact-parent">
              <div className="contact-container">
            
            <div className="icon">
              <img src={telefon} alt=""/>
            </div>
            <div className="contact-text">
                <p>Still have questions?</p>
                <a href="#" className="contact-link">Contact us {'->'}</a>
            </div>
              </div>
              <div className="contact-container">
            
            <div className="icon">
              <img src={Group} alt=""/>
            </div>
            <div className="contact-text">
                <p>Dont like phone calls?</p>
                <a href="#" className="contact-link">Contact us {'->'}</a>
            </div>
              </div>
           </div>
          </div>
          <div className="faq-container">
            {faqData.map((faq, index) => (
             <div key={faq.cid} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
             <div className="faq-question" onClick={() => toggleAccordion(index)}>
             <span>{faq.title}</span>
             <button className={`faq-toggle ${activeIndex === index ? 'active' : ''}`}>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
             </svg>
             </button>
            </div>
      <div className="faq-answer">
        <p>{faq.content}</p>
      </div>
    </div>
  ))}
</div>

          
     </div>
      </div>
     </div>
  );
};

export default SectionSix;
