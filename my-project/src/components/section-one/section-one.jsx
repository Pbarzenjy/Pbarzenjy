import '../section-one/section-one.css'; 
import AppstoreLight from '../../../public/images/sectionone/appstore.png' 
import AppstoreDark from '../../../public/images/sectionone/appstore-dark.png' 
import GoogleplayLight from '../../../public/images/sectionone/googleplay.png'
import GoogleplayDark from '../../../public/images/sectionone/googleplay-dark.png'
import Phones from '../../../public/images/sectionone/phones.png'



const SectionOne = ({isDarkMode}) => {
  return (
    <div className ="section-one">
    <div className ="section">
      <header>
        <div id="navbar-container"></div>
      </header>
      <section>
        <div className ="container">
          <div className ="leftside-content">
            <div className ="text-content">
              <h1>Manage All Your Money in One App</h1>
              <p>
                We offer you a new generation of mobile banking. Save, spend
                & manage money in your pocket.
              </p>
              <div className ="buttons">
                <div className ="buttons">
                  <button className ="store-button">
                    <img
                      src={isDarkMode ? AppstoreDark : AppstoreLight}
                      alt="App Store"
                      className ="store-image"
                    />
                  </button>
                  <button className ="store-button">
                    <img
                      src={isDarkMode ? GoogleplayDark : GoogleplayLight}
                      alt="Google Play"
                      className ="store-image"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className ="discover-container">
              <button className ="discover-btn">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 10L12 14L16 10"
                    stroke="black"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Discover More</p>
              </button>
            </div>
          </div>

          <div className ="phones">
            <img
              src={Phones}
              alt="Phones"
              className ="phone-image"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
  );
};

export default SectionOne;

