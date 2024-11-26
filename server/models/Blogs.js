const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },

  description: { type: String, required: true },
  content: { type: String, required: true },
  images: [{ type: String }],
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Blog", blogSchema);
