
import '../section-five/section-five.css'; 
import Pic from '../../../public/images/sectionfive/pic.png'
import Fannie from '../../../public/images/sectionfive/Fannie.png'
import Albert from '../../../public/images/sectionfive/Albert.png'

const SectionFive = () => {
  return (
    <div className="section-five">
    <div className='section'>
  
      <div className="section-five-customers">
        <h2>Clients are Loving Our app</h2>
  
        <div className="section-five-customers-one">
  
          <div className="testimonial-bubble">
  
            <div className="qoute">
              <img src={Pic} alt=""/>
            </div>
  
            <div className="stars">
              <svg width="250" height="50" viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
                <polygon points="25,0 32,15 50,15 35,25 40,40 25,30 10,40 15,25 0,15 18,15" fill="#ffcc00" />
                <polygon points="75,0 82,15 100,15 85,25 90,40 75,30 60,40 65,25 50,15 68,15" fill="#ffcc00" />
                <polygon points="125,0 132,15 150,15 135,25 140,40 125,30 110,40 115,25 100,15 118,15" fill="#ffcc00" />
                <polygon points="175,0 182,15 200,15 185,25 190,40 175,30 160,40 165,25 150,15 168,15" fill="#ffcc00" />
                <polygon points="225,0 232,15 250,15 235,25 240,40 225,30 210,40 215,25 200,15 218,15" fill="none" stroke="#cccccc" strokeWidth="2" />
              </svg>
            </div>
  
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
  
            <div className="testimonial-bubble-photo-parent">
              <div>
                <img src={Fannie} alt=""/>
              </div>
              <div className="testimonial-bubble-name">
                <h5>Fannie Summers</h5>
                <p>Designer</p>
              </div>
            </div>
  
          </div>
        </div>
  
        <div className="section-five-customers-one">
  
          <div className="testimonial-bubble">
  
            <div className="qoute">
              <img src={Pic} alt=""/>
            </div>
  
            <div className="stars">
              <svg width="250" height="50" viewBox="0 0 250 50" xmlns="http://www.w3.org/2000/svg">
                <polygon points="25,0 32,15 50,15 35,25 40,40 25,30 10,40 15,25 0,15 18,15" fill="#ffcc00" />
                <polygon points="75,0 82,15 100,15 85,25 90,40 75,30 60,40 65,25 50,15 68,15" fill="#ffcc00" />
                <polygon points="125,0 132,15 150,15 135,25 140,40 125,30 110,40 115,25 100,15 118,15" fill="#ffcc00" />
                <polygon points="175,0 182,15 200,15 185,25 190,40 175,30 160,40 165,25 150,15 168,15" fill="#ffcc00" />
                <polygon points="225,0 232,15 250,15 235,25 240,40 225,30 210,40 215,25 200,15 218,15" fill="#ffcc00" />
              </svg>
            </div>
  
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
  
            <div className="testimonial-bubble-photo-parent">
              <div>
                <img src={Albert} alt=""/>
              </div>
              <div className="testimonial-bubble-name">
                <h5>Albert Flores</h5>
                <p>Developer</p>
              </div>
            </div>
  
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
  
  );
};

export default SectionFive;
