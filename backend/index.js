const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // req.body

//TODO: Routes
// create a post

app.post("/posts", async (req, res) => {
    try {
        console.log(req.body);
        const { description } = req.body;
        const newPost = await pool.query(
            "INSERT INTO postlist (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newPost.rows[0])
    } catch (err) {
        console.error(err.message);
    }
});

// get a list of all posts

app.get("/posts", async (req, res) => {
    try {
        const allPosts = await pool.query(
            "SELECT * FROM postlist"
        );

        res.json(allPosts.rows);
    } catch (err) {
        console.error(err.message);
    }
});
// get a post
// update a post


app.listen(5000, () => {
    console.log("server has started on port 5000")
});