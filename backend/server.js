const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');
require("dotenv").config();

const app = express();

// ✅ Allow preflight & custom headers
app.use(cors({
  origin: 'https://take-note-isrj.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors()); // <-- Handles preflight OPTIONS

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World!!");
});

app.use('/api/notes', noteRoutes);
app.use('/api/user', userRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected!"))
  .catch(err => console.log(err));

// Server
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
