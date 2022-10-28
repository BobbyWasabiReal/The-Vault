const Item = require('../models/item');

module.exports = {
  create,
  delete: deleteReview
};

function deleteReview(req, res, next) {
  // Note the cool "dot" syntax to query for a item with a
  // review nested within an array
  Item.findOne({
    'reviews._id': req.params.id,
    'reviews.user': req.user._id
  }).then(function(item) {
    if (!item) return res.redirect('/items');
    item.reviews.remove(req.params.id);
    item.save().then(function() {
      res.redirect(`/items/${item._id}`);
    }).catch(function(err) {
      return next(err);
    });
  });
}

function create(req, res) {
    // Find the item to embed the review within
    Item.findById(req.params.id, function(err, item) {
  
      // Add the user-centric info to req.body (the new review)
      req.body.user = req.user._id;
      req.body.userName = req.user.name;
      req.body.userAvatar = req.user.avatar;
  
      // Push the subdoc for the review
      item.reviews.push(req.body);
      // Always save the top-level document (not subdocs)
      item.save(function(err) {
        res.redirect(`/items/${item._id}`);
      });
    });
  }