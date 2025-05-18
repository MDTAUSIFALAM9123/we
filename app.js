import express from "express"

const app = express()

app.get('/first', (req, res) => {
    res.send('This is my profile')
})
export default app;