import '../section-two/section-two.css';
import LogoOne from '../../../public/images/sectiontwo/logo1.png'
import Logo1 from '../../../public/images/sectiontwo/logo-1.png'
import Logo2 from '../../../public/images/sectiontwo/logo-2.png'
import Logo3 from '../../../public/images/sectiontwo/logo-3.png'
import Logo4 from '../../../public/images/sectiontwo/logo-4.png'
import LogoOnedark from '../../../public/images/sectiontwo/logo1-dark.png'
import Logo1dark from '../../../public/images/sectiontwo/logo-1-dark.png'
import Logo2dark from '../../../public/images/sectiontwo/logo-2-dark.png'
import Logo3dark from '../../../public/images/sectiontwo/logo-3.-dark.png'
import Logo4dark from '../../../public/images/sectiontwo/logo-4-dark.png'
import Logo5dark from '../../../public/images/sectiontwo/logo-5-dark.png'
import AppFeature from '../../../public/images/sectiontwo/app-feature-phone.png'
import EasyPayment from '../../../public/images/sectiontwo/EasyPayment.png'
import Regular from '../../../public/images/sectiontwo/regular.png'
import Coststatistics from '../../../public/images/sectiontwo/Coststatistics.png'
import Datasec from '../../../public/images/sectiontwo/datasec.png'
import Support from '../../../public/images/sectiontwo/support.png'
import Topstand from '../../../public/images/sectiontwo/topstand.png'
const SectionTwo = ({isDarkMode}) => {
  console.log(isDarkMode)
  return (
<div className ="section-two">
        <div className ="section">
          <div className ="brands">
            <img src={isDarkMode ? LogoOnedark : LogoOne} alt="logo" />
            <img src={isDarkMode ? Logo1dark : Logo1} alt="logo" />
            <img src={isDarkMode ? Logo2dark : Logo2} alt="logo" />
            <img src={isDarkMode ? Logo3dark : Logo3} alt="logo" />
            <img src={isDarkMode ? Logo4dark : Logo4} alt="logo" />
            <img src={isDarkMode ? Logo5dark : LogoOne} alt="logo" />
          </div>
          <div className ="app-feature-container">
            <div className ="phone-two">
              <img src={AppFeature} alt="" />
            </div>
            <div className ="app-feature">
              <div className ="app-feature-text">
                <h2>App Features</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  volutpat mollis egestas. Nam luctus facilisis ultrices.
                  Pellentesque volutpat ligula est. Mattis fermentum, at nec
                  lacus.
                </p>
              </div>
              <div className ="both-feature-content">
                <div className ="left-feature-content">
                  <div className ="feature">
                    <div><img src={EasyPayment} alt="logo" /></div>
                    <div>
                      <h3>Easy Payments</h3>
                      <p>
                        Id mollis consectetur congue egestas egestas suspendisse
                        blandit justo.
                      </p>
                    </div>
                  </div>
                  <div className ="feature">
                    <div><img src={Regular} alt="logo" /></div>
                    <div>
                      <h3>Cost Statistics</h3>
                      <p>
                        Mattis urna ultricies non amet, purus in auctor non.
                        Odio vulputate ac nibh.
                      </p>
                    </div>
                  </div>
                  <div className ="feature">
                    <div>
                      <img src={Coststatistics} alt="logo" />
                    </div>
                    <div>
                      <h3>Regular Cashback</h3>
                      <p>
                        Sit facilisis dolor arcu, fermentum vestibulum arcu
                        elementum imperdiet eleifend.
                      </p>
                    </div>
                  </div>
                </div>
                <div className ="right-feature-content">
                  <div className ="feature">
                    <div><img src={Datasec} alt="logo" /></div>
                    <div>
                      <h3>Data Security</h3>
                      <p>
                        Augue pulvinar justo, fermentum fames aliquam accumsan
                        vestibulum non.
                      </p>
                    </div>
                  </div>
                  <div className ="feature">
                    <div><img src={Support} alt="logo" /></div>
                    <div>
                      <h3>Support 24/7</h3>
                      <p>
                        A elementum, imperdiet enim, pretium etiam facilisi in
                        aenean quam mauris.
                      </p>
                    </div>
                  </div>
                  <div className ="feature">
                    <div><img src={Topstand} alt="logo" /></div>
                    <div>
                      <h3>Top Standards</h3>
                      <p>
                        Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                        risus id. Sit facilisis dolor arcu.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default SectionTwo;
