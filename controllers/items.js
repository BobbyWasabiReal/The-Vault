const Item = require('../models/item');

module.exports = {
  index,
  show,
  new: newItem,
  create
};

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', { title: 'All items', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id);
    res.render('items/show', {
    title: 'Item Detail',
    item,
    });
};

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item' });
}

function create(req, res) {
  // Convert upForTrade's checkbox of nothing or "on" to boolean
  req.body.upForTrade = !!req.body.upForTrade;
  // Delete empty properties on req.body for defaults to happen 
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const item = new Item(req.body);
  item.save(function(err) {
    if (err) return res.redirect('/items/new');
    console.log(item);
    res.redirect(`/items/${item._id}`);
  });
}
