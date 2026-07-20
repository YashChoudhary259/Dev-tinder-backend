const express = require('express')

const app = express();

//This will only handle GET call to /user
app.get("/user", (req,res) => {
    res.send({ firstName: "Yash", lastName: "Choudhary"})
})

app.post("/user", async (req,res) => {
    console/log(req.body)
    //saving data to DB
    res.send("Data successfully saved to the database!")
})

app.delete("/user", (req,res) => {
    res.send("Deleted successfully!")
})

//this will match all the HTTP method API calls to /test
app.use("/test", (req,res) => {
    res.send("this is a test route , what are you doing here?")
})

app.use("/hey", (req,res) => {
    res.send("hey hey hey")
})

app.use((req,res) => {
    res.send("hello from the server, how are you")
})

app.listen(3000, () => {
    console.log("success")
})