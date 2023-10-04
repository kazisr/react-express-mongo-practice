const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({"users": ['userOne', 'userTwo', 'userThreeeee'], "pass": ['sadas', 'sfdasd', 'asdasd']})
})

// server listening
const port=5000;
app.listen(port,()=>{
    console.log(`your server is listening at port ${port}`)
})