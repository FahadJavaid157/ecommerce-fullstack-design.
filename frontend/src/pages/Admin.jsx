import { useState } from "react";
import "./AdminPanel.css";
function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("image", formData.image);

    const res = await fetch("http://localhost:5000/api/products/add-product", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}
export default AddProduct;
