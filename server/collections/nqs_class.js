/*
 * Add query methods like this:
 *  NqsClass.findPublic = function () {
 *    return NqsClass.find({is_public: true});
 *  }
 */
NqsClass.allow({
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

NqsClass.deny({
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