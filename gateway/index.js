import express from "express";
import proxy from "express-http-proxy";


const app = express();
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
    res.send(`Hello from ${process.env.SERVER} gateway server!`);
});

app.use("/product", proxy("http://product:3003"));
app.use("/payment", proxy("http://payment:3002"));
app.use("/auth", proxy("http://auth:3001"));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
