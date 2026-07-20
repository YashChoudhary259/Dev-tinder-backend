const express = require('express')

const app = express();

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