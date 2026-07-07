import express from "express";


const app = express();
app.use(express.json());

const port =  3003;

app.get("/", (req, res) => {
    res.send(`Hello from  product microservice!`);
});

app.get("/product/:id", (req, res) => {
    const productId = req.params.id;
    const product = { id: productId, name: `Product ${productId}`, price: 10 * productId };
    res.json(product);
});

app.get("/products", (req, res) => {
    const products = [
        { id: 1, name: "Product 1", price: 10 },
        { id: 2, name: "Product 2", price: 20 },
        { id: 3, name: "Product 3", price: 30 },
        { id: 4, name: "Product 4", price: 40 },
        { id: 5, name: "Product 5", price: 50 },
    ];
    res.json(products);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
