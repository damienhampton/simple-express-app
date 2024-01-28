const express = require('express');
const app = express();

app.use((req, res) => {
    res.json({ environment: process.env });
})

app.listen(process.env.PORT || 3000);
