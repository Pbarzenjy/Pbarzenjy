import '../section-flower/section-flower.css'; 
import EasyPayment from '../../../public/images/sectiontwo/EasyPayment.png'
import Coststatistics from '../../../public/images/sectiontwo/Coststatistics.png'
import flowertop from '../../../public/images/sectionflower/flower-top.png'
import flowerbottom from '../../../public/images/sectionflower/flower-bottom.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';


const SectionFour = () => {
  return (
   
   <div className="section-flower">
    <div className='section'>
     <div className="section-flower-top">
       <div className="section-flower-top-text">
         <h2>Make your money transfer simple and clear</h2>
         <ul className="checklist">
           <li>
             
               <FontAwesomeIcon className='checkmark' icon={faCircleCheck}/>
             Banking transactions are free for you
           </li>
           <li>
             
             <FontAwesomeIcon className='checkmark'  icon={faCircleCheck}/>
             No monthly cash commission
           </li>
           <li>
             
             <FontAwesomeIcon className='checkmark'  icon={faCircleCheck}/>
             Manage payments and transactions online
           </li>
           <div className="sign-in-up learm-more-container">
             <button className="sign-in-button learn-more">
            Learn More {'->'}
             </button>
            </div>
         </ul>
       </div>
       <img className="flower-top-photo" src={flowertop} alt="" />
     </div>
     <div className="section-flower-bottom">
       <img src={flowerbottom} alt="" /> 
       <div className="">
         <h2>Receive payment from international bank details</h2>
         <div className="payment-from">
           <div>
             <img src={EasyPayment} alt="logo" />
             <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
           </div>
           <div>
             <img src={Coststatistics} alt="logo" />
             <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
           </div>
         </div>
         <div className="sign-in-up learm-more-container">
           <button className="sign-in-button learn-more">
          Learn More {'->'}
           </button>
          </div>
       </div>
     </div>
     </div>
    </div>
  );
};

export default SectionFour;
