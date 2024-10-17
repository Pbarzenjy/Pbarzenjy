import '../section-tree/section-tree.css';  
import ProOne from '../../../public/images/sectiontree/iPhone 12 Pro1.png'
import ProTwo from '../../../public/images/sectiontree/iPhone 12 Pro2.png'
import ProThree from '../../../public/images/sectiontree/iPhone 12 Pro3.png'



const SectionThree = () => {
  return (
<div className="section-tree">
        <div className="section">
          <h2>How Does It Work?</h2>
          <div className="tree-phones">
            <img src={ProOne} alt="" />
            <img src={ProTwo} alt="" />
            <img src={ProThree} alt="" />
          </div>
          <div className="compact-text">
            <h4>Latest Transaction History</h4>
            <p>
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
              Arcu sociis tristique quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
  );
};

export default SectionThree;
