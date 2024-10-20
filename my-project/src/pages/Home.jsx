import SectionOne from '../components/section-one/section-one';
import SectionTwo from '../components/section-two/section-two';
import SectionThree from '../components/section-tree/section-tree';
import SectionFour from '../components/section-flower/section-flower';
import SectionFive from '../components/section-five/section-five';
import SectionSix from '../components/section-six/section-six';

const Home = ({isDarkMode}) => {
  console.log(isDarkMode)
  return  <> 
    
    <SectionOne isDarkMode={isDarkMode}/>
    <SectionTwo isDarkMode={isDarkMode}/>
    <SectionThree isDarkMode={isDarkMode}/>
    <SectionFour isDarkMode={isDarkMode}/>
    <SectionFive isDarkMode={isDarkMode}/>
    <SectionSix isDarkMode={isDarkMode}/>
    
    </>
 
  
 

};



export default Home