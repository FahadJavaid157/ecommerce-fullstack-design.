import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";
import "./styles.css";
export function Footer() {
  return (
    <>
      <footer>
        <div className="up">
          <div className="box box1">
            <div className="imgs">
              <img src="/public/images/logo-symbol.png" alt="Logo" id="logo" />
              <img src="/public/images/Brand.png" alt="brand-text" />
            </div>
            <p className="text">
              Best information about the company gies here but now lorem ipsum
              is
            </p>
            <span className="social">
              <FaFacebookF />
            </span>
            <span className="social">
              <CiTwitter />
            </span>
            <span className="social">
              <FaLinkedinIn />
            </span>
            <span className="social">
              <FaInstagram />
            </span>
            <span className="social">
              <FaYoutube />
            </span>
          </div>
          <div className="box box2">
            <h4>About</h4>
            <Link className="link">About Us</Link>
            <Link className="link">Find store</Link>
            <Link className="link">Categories</Link>
            <Link className="link">Blogs</Link>
          </div>
          <div className="box box3">
            <h4>Paternership</h4>
            <Link className="link">About Us</Link>
            <Link className="link">Find store</Link>
            <Link className="link">Categories</Link>
            <Link className="link">Blogs</Link>
          </div>
          <div className="box box4">
            <h4>Information</h4>
            <Link className="link">Help Center</Link>
            <Link className="link">Money Refund</Link>
            <Link className="link">Shipping</Link>
            <Link className="link">Contact us</Link>
          </div>
          <div className="box box5">
            <h4>For users</h4>
            <Link className="link">Login</Link>
            <Link className="link">Register</Link>
            <Link className="link">Settings</Link>
            <Link className="link">My Orders</Link>
          </div>
          <div className="box box6">
            <h4>Get app</h4>
            <Link className="link">
              <img
                src="/public/images/market-button.png"
                alt="app store"
                className="btn"
              />
            </Link>
            <Link className="link">
              <img
                src="/public/images/market-button-google.png"
                alt="google btn"
                className="btn"
              />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
