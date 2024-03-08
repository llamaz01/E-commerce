const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Routs 
const productRoutes =  require("./routes/product.routes");
app.use("/api/product", productRoutes);

//* Routs Users
const userRoutes =  require("./routes/user.routes");
app.use("/api/user", userRoutes);


app.listen(port, () => console.log(`Listening at Port: ${port}`));