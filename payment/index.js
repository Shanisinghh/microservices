import express from "express";


const app = express();
app.use(express.json());

const port =  3002;

app.get("/", (req, res) => {
    res.send(`Hello from  payment microservice!`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
