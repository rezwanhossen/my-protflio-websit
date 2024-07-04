import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { FaSquareInstagram } from "react-icons/fa6";
import "../App.css";
const Footer = () => {
  return (
    <div className=" mt-10 bg-black/55 p-8">
      <div className=" flex gap-5 my-10 justify-center text-3xl">
        <Link to="https://www.facebook.com/profile.php?id=100059470159235">
          <FaFacebookF className=" contact-icon text-[#1877F2]" />
        </Link>
        <Link to="https://www.linkedin.com/in/rezwan-hossen-77b057316/">
          <GrLinkedin className="contact-icon text-[#0077B5]" />
        </Link>
        <Link to="https://www.instagram.com/rezwan.33/">
          <FaSquareInstagram className="contact-icon text-[#962fbf]" />
        </Link>
      </div>
      <p className=" text-center">
        Copyright © ${new Date().getFullYear()} - All right reserved by{" "}
        <span className=" text-rose-400">Rezwan Hossen.</span>
      </p>
    </div>
  );
};

export default Footer;
