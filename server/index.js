require('dotenv').config()
const express = require('express');
var session = require("cookie-session")
const cors = require("cors")
const app = express();
const favoriteRouter = require("./routes/favorite.router")
const gamesRouter = require("./routes/games.router")
const userRouter = require("./routes/user.router")


app.use(cors())
app.use(session({
  name: 'session',
  keys: [process.env.JWT_SECRET],
  maxAge: 24 * 60 * 60 * 1000
}));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', gamesRouter)
app.use('/api', userRouter)
app.use('/api', favoriteRouter)

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Il server è attivo alla porta ${PORT}`);
})






