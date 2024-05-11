import express from "express";

// Initializing the app
const app = express();

const token = 5 // This variable specifies how many users can access a 

app.get("", (req, res) => {
  console.log("hello world")
})

app.listen(3000, () => {
  console.log(`server started on port 3000`)
})
