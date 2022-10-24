import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { auth } from "../firebase-config";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="NavContainer">
      <nav>
        <ul>
          <li>
            <a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail </a>
          </li>
          <li>
            <a href="https://www.google.com.ng/imghp?hl=en&authuser=0&ogbl">
              Images{" "}
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ng/intl/en/about/products">
              {<BsFillGrid3X3GapFill />}
            </a>
          </li>
          {/* <img src={auth.currentUser?.photoURL} alt="img" /> */}
          <div className="profilepic">
            <img src={localStorage.getItem("photoUrl")} alt="img" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
