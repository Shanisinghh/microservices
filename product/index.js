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
        { id: 6, name: "Product 6", price: 60 },
        { id: 7, name: "Product 7", price: 70 },
        { id: 8, name: "Product 8", price: 80 },
        { id: 9, name: "Product 9", price: 90 },
        { id: 10, name: "Product 10", price: 100 },
        { id: 11, name: "Product 11111", price: 110 },
        { id: 12, name: "Product 12222", price: 120 },
    ];
    res.json(products);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
