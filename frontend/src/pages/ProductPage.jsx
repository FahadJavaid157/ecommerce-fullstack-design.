import { useParams } from "react-router-dom";
import products from "../api/products.json";
import "./ProductPage.css";

function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) return <h2>Product not found</h2>;

  // --- Add to Cart Handler ---
  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if product already exists
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity if exists
      existing.qty += 1;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      const productToAdd = {
        id: product.id,
        name: product.title,
        price: product.price,
        qty: 1,
        img: product.image,
        size: "M",
        color: "Default",
        material: "Cotton",
        seller: "My Store",
      };
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, productToAdd])
      );
    }

    alert("Product added to cart!");
  };

  return (
    <div className="product-page">
      <div className="product-top">
        <div className="image-section">
          <img src={product.image} alt={product.title} className="main-image" />
          <div className="thumbnail-row">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={product.image} alt="thumb" className="thumb" />
            ))}
          </div>
        </div>

        <div className="info-section">
          <h2 className="product-title">{product.title}</h2>
          <div className="price-box">
            <span className="old-price">
              ${(product.price + 20).toFixed(2)}
            </span>
            <span className="new-price">${product.price}</span>
            <span className="discount">-20%</span>
          </div>
          <p className="rating">
            ⭐ {product.rating.rate} | {product.rating.count} sold
          </p>

          <div className="specs">
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Warranty:</strong> 1 year
            </p>
            <p>
              <strong>Material:</strong> Cotton
            </p>
          </div>

          <div className="btn-row">
            <button className="add-cart" onClick={addToCart}>
              Add to Cart
            </button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className="tab active">Description</button>
        <button className="tab">Reviews</button>
        <button className="tab">Shipping</button>
        <button className="tab">About Seller</button>
      </div>
      <div className="tab-content">
        <p>{product.description}</p>
      </div>

      <h3 className="related-title">Related Products</h3>
      <div className="related-row">
        {products.slice(0, 6).map((p) => (
          <div key={p.id} className="related-card">
            <img src={p.image} alt={p.title} />
            <p className="rel-name">{p.title}</p>
            <p className="rel-price">${p.price}</p>
          </div>
        ))}
      </div>

      <div className="discount-banner">
        <p>
          💰 Super discount on more than $100 USD — Have more of what you love
          with extra savings
        </p>
        <button>Shop now</button>
      </div>
    </div>
  );
}

export default ProductPage;
