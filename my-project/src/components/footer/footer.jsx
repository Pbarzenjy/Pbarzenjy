import '../footer/footer.css';  
import Noti from '../../../public/images/footer/notification.png'

const Footer = () => {
  return (
    <div className="footer">
    <div className="section">
      <div className="sec-footer">
        <div className="img-footer">
          <img src={Noti} alt="" />
          <h3 className='footer-h3'>Subscribe to our newsletter to stay informed about latest updates</h3>
        </div>
        <div className="subscription-container">
          <form className="subscription-form">
            <div className="input-group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
  
              <input type="email" placeholder="Your Email" required />
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    <div className="all-rights">
      <div className="section">
        <div className="paragraf">
          <p>© 2024 Silicon. All rights reserved. Credit MadrasThemes</p>
        </div>
      </div>
    </div>
  </div> 
  );
};

export default Footer;
