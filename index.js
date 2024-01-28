const express = require('express');
const Redis = require('ioredis');
const app = express();

const redis = new Redis(6379, "redis-staging")

app.get('/env', (req, res) => {
    res.json({ environment: process.env });
})
app.get('/redis', async (req, res) => {
    res.json({ redis: await redis.info() });
})

app.listen(process.env.PORT || 3000);
