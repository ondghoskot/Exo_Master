// backend/routes/exerciseRoutes.js
const express = require('express');
const { getBodyPartList } = require('../controllers/exerciseController.js');
const router = express.Router();

// Route to get the list of body parts
router.get('/bodyPartList', getBodyPartList);

module.exports = router;
