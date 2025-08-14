import { useRef, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
export function Sidebar() {
  const box1 = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const Icon = useRef(null);
  const handleIcon = () => {
    if (box1.current) {
      box1.current.style.height = expanded ? "50px" : "264px";
      setExpanded(!expanded);
      Icon.current.style.transform = expanded
        ? "rotate(180deg)"
        : "rotate(0deg)";
    }
  };

  return (
    <>
      <section className="sidebar">
        <div className="box1" ref={box1} onClick={handleIcon}>
          <div className="Side_container">
            <div className="heading">Categories</div>
            <div className="icon" ref={Icon}>
              ^
            </div>
          </div>
          <div className="inner_box">
            <Link className="link">Mobile Accessories</Link>
            <Link className="link">Electronics</Link>
            <Link className="link">Smartphones</Link>
            <Link className="link">Modern Tech</Link>
            <Link className="link see">See all</Link>
          </div>
        </div>
        <div className="box2">
          <h2>Brands</h2>
          <span>
            <input
              type="checkbox"
              name="samsung"
              id="samsung"
              value="samsung"
            />
            <label htmlFor="samsung">Samsung</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="samsung"
              id="samsung"
              value="samsung"
            />
            <label htmlFor="samsung">Samsung</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="samsung"
              id="samsung"
              value="samsung"
            />
            <label htmlFor="samsung">Samsung</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="samsung"
              id="samsung"
              value="samsung"
            />
            <label htmlFor="samsung">Samsung</label>
          </span>
          <span>
            <input
              type="checkbox"
              name="samsung"
              id="samsung"
              value="samsung"
            />
            <label htmlFor="samsung">Samsung</label>
          </span>
        </div>
        <div className="box3">
          <h2>Feature</h2>
          <span>
            <input type="checkbox" name="Metal" id="Metal" value="Metal" />
            <label htmlFor="Metal">Metal</label>
          </span>
          <span>
            <input type="checkbox" name="Metal" id="Metal" value="Metal" />
            <label htmlFor="Metal">Metal</label>
          </span>{" "}
          <span>
            <input type="checkbox" name="Metal" id="Metal" value="Metal" />
            <label htmlFor="Metal">Metal</label>
          </span>{" "}
          <span>
            <input type="checkbox" name="Metal" id="Metal" value="Metal" />
            <label htmlFor="Metal">Metal</label>
          </span>
          <span>
            <input type="checkbox" name="Metal" id="Metal" value="Metal" />
            <label htmlFor="Metal">Metal</label>
          </span>
        </div>
        <div className="box4">Price Range</div>
        <div className="box4">Price Range</div>
        <div className="box4">Price Range</div>
        <div className="box4">Price Range</div>
      </section>
    </>
  );
}
