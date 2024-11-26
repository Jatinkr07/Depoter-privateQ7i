const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const blogRoutes = require("./routes/blogRoutes");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

const corsOptions = {
  origin: "https://helpful-lily-ccb1b9.netlify.app/",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
// app.options("*", cors());

app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(helmet());
app.use(cookieParser());

// app.use("/uploads", express.static("uploads"));

app.use("/api/admin", adminRoutes);
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.green.bold)
);
