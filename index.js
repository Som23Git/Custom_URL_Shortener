const express = require('express')

const app = express();

app.use(express.json({ extented: false}));

const PORT = 5000;

app.listen(PORT, () => console.log('Server Runnning on Port ${PORT}'));