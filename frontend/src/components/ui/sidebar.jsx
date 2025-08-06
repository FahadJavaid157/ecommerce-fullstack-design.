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
          <div className="container">
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
      </section>
    </>
  );
}
