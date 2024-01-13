var express = require('express');
var router = express.Router();
var Category = require('../models/category') 




router.post('/', async function(req, res, next) {
  const { name } = req.body;

  try {
    const newCategory = new Category({ name });
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




router.get('/', async function(req, res, next) {
  try {
    
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




module.exports = router;
