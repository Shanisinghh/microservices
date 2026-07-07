import express from "express";


const app = express();
app.use(express.json());

const port =  3001;

app.get("/", (req, res) => {
    res.send(`Hello from  auth microservice!`);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
