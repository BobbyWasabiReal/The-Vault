const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/items'
item
// GET /items (display all items)
router.get('/', itemsCtrl.index);
// GET /items/new (display a form for entering a new item)
router.get('/new', ensureLoggedIn, itemsCtrl.new);
// GET /items/:id (display a "detail/show" page for a single item)
router.get('/:id', itemsCtrl.show);
// POST /items (handle the new form being submitted)
router.post('/', ensureLoggedIn, itemsCtrl.create);

module.exports = router;