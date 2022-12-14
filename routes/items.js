const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes start with '/items'

// GET /items (display all items)
router.get('/', itemsCtrl.index);
// GET /items/new (display a form for entering a new item)
router.get('/new', ensureLoggedIn, itemsCtrl.new);
// GET /items/:id (display a "detail/show" page for a single item)
router.get('/:id', itemsCtrl.show);
// POST /items (handle the new form being submitted)
router.post('/', ensureLoggedIn, itemsCtrl.create);
// GET /items/:id/edit
router.get('/:id/edit', ensureLoggedIn, itemsCtrl.edit);
// PUT /items/:id
router.put('/:id', ensureLoggedIn, itemsCtrl.updateItem);
// DELETE /items/:id
router.delete('/:id', ensureLoggedIn, itemsCtrl.delete);

module.exports = router;