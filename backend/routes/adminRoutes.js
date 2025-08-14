import express from "express";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Looking for:", username);
  const admin = await Admin.findOne({ username });
  console.log("Found admin:", admin);

  try {
    // DB me se username match karo
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    if (admin.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong password" });
    }

    // Success
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
