import '../section-six/section-six.css';
import telefon from '../../../public/images/sectionsix/telefon.png'
import Group from '../../../public/images/sectionsix/Group.png'


const SectionSix = () => {

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
            <div className="faq-item">
              <div className="faq-question">
                <span>Is any of my personal information stored in the App?</span>
                <button className="faq-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>Your personal information is stored securely in accordance with our privacy policy and is only used to provide better services.</p>
              </div>
            </div>
          
            <div className="faq-item">
              <div className="faq-question">
                <span>What formats can I download my transaction history in?</span>
                <button className="faq-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>You can download your transaction history in PDF, CSV, or Excel formats for easy tracking and analysis.</p>
              </div>
            </div>
          
            <div className="faq-item active">
              <div className="faq-question">
                <span>Can I schedule future transfers?</span>
                <button className="faq-toggle active">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>Nunc dui id aenean gravida tincidunt eu, tempor ullamcorper. Vivamus aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
              </div>
            </div>
          
            <div className="faq-item">
              <div className="faq-question">
                <span>When can I use Banking App services?</span>
                <button className="faq-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>Our app services are available 24/7 for your convenience, ensuring that you can access your account anytime.</p>
              </div>
            </div>
          
            <div className="faq-item">
              <div className="faq-question">
                <span>Can I create my own password that is easy for me to remember?</span>
                <button className="faq-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>Yes, you can create your own password. Just ensure it meets our security criteria for better protection of your account.</p>
              </div>
            </div>
          
            <div className="faq-item">
              <div className="faq-question">
                <span>What happens if I forget or lose my password?</span>
                <button className="faq-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10l5 5 5-5H7z" fill="#6C63FF"/>
                  </svg>
                </button>
              </div>
              <div className="faq-answer">
                <p>If you forget your password, you can use the Forgot Password feature to reset it securely.</p>
              </div>
            </div>
          </div>
          
     </div>
      </div>
     </div>
  );
};

export default SectionSix;
