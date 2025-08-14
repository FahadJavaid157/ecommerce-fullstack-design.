import express from "express";
import multer from "multer";
import Product from "../models/Product.js";

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // uploads folder create karke rakhna
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Add Product API
router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newProduct.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding product" });
  }
});

export default router;
