import BreadCrumb from "../components/bread-crumb/BreadCrumb";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import map from '../../public/images/contact/map.png'

const Contact = () => {
  return  <> 
    
<div className="section">
  <BreadCrumb />
  <div className="contact-info">
    <h2>Contact us </h2>
    <div className="contact-email">
    <div className="icon-container">
    <FontAwesomeIcon icon={faEnvelope} /></div>
      <div className="contact-text">
       <h3> Email us</h3>
       <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
       <a href="#" className="contact-link">Leave a message 
         <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
    <div className="careers">
    <div className="contact-email">
      <div className="icon-container">
      <FontAwesomeIcon icon={faUserPlus} /></div>
      <div className="contact-text">
       <h3> Careers</h3>
       <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
       <a href="#" className="contact-link">
         Send an application <FontAwesomeIcon icon={faArrowRight} />
       </a>
      </div>
    </div>
    </div><div className="appointment-form">
   
  <div className="input-box">
    <h2>Get Online Consulataion</h2>

    <div className="input-boxes">
      <label>Full name</label>
      <input type="text" />
    </div>
    <div className="input-boxes">
      <label>Email address</label>
      <input type="text" />
    </div>
    <div className="input-boxes">
      <label>Specialist</label>
      <select name="" id="">
        <option value=""></option>
        <option value="general">General</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
      </select>
    </div>




  </div>
  <button className="button-make">
      <p>Make an appointment</p>
    </button>

 </div>
  </div>
</div>
<div className="down-section">
 <div className="section"> 
   <div className="map">
    <img src={map}alt="" />
   </div>
   <div className="down-section-text">
    <h2>Medical Center 1</h2>
    <div className="down-section-info">
      <div className="down-section-info-container">
        {/* fontawesome  */}
      </div>

    </div>
   </div>
 </div>
 </div>

    
  </>
 
  
 

};



export default Contact