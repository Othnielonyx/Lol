import axios from "axios";
import express from "express";

const app = express()
const port = 3000

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", { jokes: "Click to generate a joke 👇🏾 ..." });
  });

app.get("/get-joke", async (req, res) => {
    try {
        const result = await axios.get("https://v2.jokeapi.dev/joke/Programming");
        res.render("index.ejs", {jokes: JSON.stringify(result.data.joke)})
    } catch (error) {
        console.log(error.response.data)
        res.status(500)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})