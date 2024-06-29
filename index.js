const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("Hello From Node API OsKE");
});



// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

//update a product
// app.put("/api/products/:id", async (req, res) => {
//   try {
//     const {id}= req.params;

//     const product = await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return res.status(404).json({message : "Product not Found"});

//     }

//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);


//   } catch (error) {
//     res.status(500).json({message:error.message});
//   }
// });


//Delete Product
// app.delete("/api/products/:id", async (req, res) => {
//   try {
//     const {id}= req.params;

//     const product = await Product.findByIdAndDelete(id,req.body);

//     if(!product){
//       return res.status(404).json({message : "Product not Found"});

//     }

    
//     res.status(200).json({message: "Product deleted successfully"});


//   } catch (error) {
//     res.status(500).json({message:error.message});
//   }
// });

mongoose
  .connect(
    "mongodb+srv://robetyusuf3:sJeRD04IQEGSI3sq@backend.owx2qom.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend"
  )
  .then(() => {
    console.log("Connected To Database!");

    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })

  .catch(() => {
    console.log("Connection Failed");
  });
