/*
 * Add query methods like this:
 *  NqsEvent.findPublic = function () {
 *    return NqsEvent.find({is_public: true});
 *  }
 */
NqsEvent.allow({
  insert: function (userId, doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});

NqsEvent.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});