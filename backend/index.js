const express = require("express")
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // req.body



// CREATE a post
app.post("/posts", async (req, res) => {
    try {
        // console.log(req.body);
        const { description } = req.body;
        const newPost = await pool.query(
            "INSERT INTO postlist (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newPost.rows[0]) // return the first row of the response
    } catch (err) {
        console.error(err.message);
    }
});

// GET a list of all posts

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

// GET a single post
app.get("/posts/:id", async (req, res) => {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const singlePost = await pool.query(
            "SELECT * FROM postlist WHERE post_id = $1",
            [id]
        );

        res.json(singlePost.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// UPDATE a post
app.put("/posts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatePost = await pool.query(
            "UPDATE postlist SET description = $1 WHERE post_id = $2",
            [description, id]
        );

        res.json("Post was updated")
    } catch (err) {
        console.error(err.message)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
});