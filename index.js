const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoute');
const billsRoutes = require('./routes/billsRoute');
const path = require("path");

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/items', itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bills", billsRoutes);

// static files
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
