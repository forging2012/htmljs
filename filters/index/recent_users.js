// Generated by CoffeeScript 1.9.3
(function() {
  var func_card;

  func_card = __F('card');

  module.exports = function(req, res, next) {
    if (req.query.page) {
      next();
      return;
    }
    return func_card.getAll(1, 16, null, 'createdAt desc', function(error, cards) {
      if (error) {
        console.log(error);
      }
      res.locals.cards = cards;
      return next();
    });
  };

}).call(this);
