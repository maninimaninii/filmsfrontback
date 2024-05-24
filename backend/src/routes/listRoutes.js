const requireAuth = require('../middlewares/authMiddleware'); 
const express = require('express');
const listController = require('../Controllers/listController');
const router = express.Router();


router.get('/lists', listController.getAllLists);
router.get('/lists/:id', listController.getListById);