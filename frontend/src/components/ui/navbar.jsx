import { Link } from "react-router";
import "./styles.css";
export function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <ul className="list1">
            <li>
              <Link className="nav-link ">
                <img
                  src="/public/images/Vector.png"
                  alt="hamburger"
                  id="hamburger"
                />
                <p className="nav-text">All categories</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Hot offers</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Gift boxes</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Projects</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Menu items</p>
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Help </p>
                <img
                  src="/public/images/expand_more.png"
                  alt="extend-more"
                  className="extend-img"
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-Right">
          <ul className="list2">
            <li>
              <Link className="nav-link">
                <p className="nav-text">English,USD</p>
                <img
                  src="/public/images/expand_more.png"
                  alt="extend-more"
                  className="extend-img"
                />
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                <p className="nav-text">Ship to</p>
                <img
                  src="/public/images/icon.png"
                  alt="extend-more"
                  className="icon"
                />
                <img
                  src="/public/images/expand_more.png"
                  alt="extend-more"
                  className="extend-img"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
