import { BsGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from "../components/ui/sidebar";
import "./display.css";
import { useState } from "react";
import products from "../api/products.json";
import { Link } from "react-router";
export function Display() {
  const [view, setView] = useState("grid");

  return (
    <section className="main">
      <Sidebar />
      <div className="section2">
        <div className="icon_box">
          <input
            type="checkbox"
            name="verified"
            id="verified"
            value="Verified"
          />
          <label htmlFor="verified">Verified</label>
          <select name="feature" id="feature">
            <option value="Featured">Featured</option>
            <option value="Mobile">Tech</option>
            <option value="Home">Home</option>
          </select>

          <div className="icons">
            <button
              onClick={() => setView("flex")}
              className={view === "flex" ? "active" : ""}
            >
              <GiHamburgerMenu className="icons" />
            </button>

            <button
              onClick={() => setView("grid")}
              className={view === "grid" ? "active" : ""}
            >
              <BsGridFill className="icons" />
            </button>
          </div>
        </div>
        <div className={`items-container ${view}`}>
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <div className="imgbox">
                <img src={product.image} alt={product.name} className="img" />
              </div>
              <div className="descriptionbox">
                <h3 className="name">{product.name}</h3>
                <h3 className="price">${product.price}</h3>
                <p className="desc">{product.description}</p>
                <Link to="#" className="link">
                  View detail
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
