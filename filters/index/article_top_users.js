// Generated by CoffeeScript 1.9.3
(function() {
  var func_count;

  func_count = __F('user/count');

  module.exports = function(req, res, next) {
    return func_count.getTopUser("article_count", 10, function(error, users) {
      if (users) {
        res.locals.article_top_users = users;
      }
      return next();
    });
  };

}).call(this);
