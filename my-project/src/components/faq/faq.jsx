import '../faq/faq.css'
import { useState, useEffect  } from "react";


const API_BASE_URL = "https://win24-assignment.azurewebsites.net";

const FAQ = () => {
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
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={faq.cid} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            <h3>{faq.title}</h3>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              <p>{faq.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

