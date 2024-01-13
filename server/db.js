const mongoose = require('mongoose');

const uri = 'mongodb+srv://budget-tracker:budget-tracker123@cluster0.qxayaa3.mongodb.net/budget-tracker?retryWrites=true&w=majority'; 
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

module.exports = db;




