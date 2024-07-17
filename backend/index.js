const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running...");
});

//sign up
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    // Check if email already exists in the database
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      // Email already exists
      return res.send({
        message: "Email id is already registered!",
        alert: false,
      });
    } else {
      // Create a new user if email does not exist
      const newUser = new userModel(req.body);
      await newUser.save();
      return res.send({ message: "Successfully signed up!", alert: true });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred during signup!");
  }
});

//api login
app.post("/login", async (req, res) => {
  const { email } = req.body;

  try {
    // Find user by email
    const result = await userModel.findOne({ email });

    if (result) {
      // Prepare data to send back (excluding sensitive info like passwords)
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };

      // Send success response
      return res.send({
        message: "Login is successful!",
        alert: true,
        data: dataSend,
      });
    } else {
      // Send failure response
      return res.send({
        message: "Email is not registered, please sign up!",
        alert: false,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("An error occurred during login!");
  }
});

// Product section
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
});
const productModel = mongoose.model("product", schemaProduct);

// Save product in data
// api
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successful!" });
});

//
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//server is ruuning
app.listen(PORT, () => console.log("Server is running at port : " + PORT));
