import "./BreadCrumb.css";
import { TiHomeOutline } from "react-icons/ti";

const BreadCrumb = () => {
  return (
    <nav className="breadcrumb">
      <TiHomeOutline />
      <a href="#" className="breadcrumb-item">Homepage</a>
      <span className="breadcrumb-separator">»</span>
      <a href="#" className="breadcrumb-item breadcrumb-active">Contact</a>
    </nav>
  );
};

export default BreadCrumb;
