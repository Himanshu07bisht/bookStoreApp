const express = require("express");
const app = express();

const port = 5000;

//mongodb+srv://himanshusinghbisht232:<password>@cluster0.9vjaaid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(port, () => {
    console.log('Server is listening on port ${port}')
})