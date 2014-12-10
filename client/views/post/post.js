/*****************************************************************************/
/* Post: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Post.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Post.helpers({
  postedDate: function(){
    var pDate = new Date(this.posted)
    var word = pDate.getFullYear();
    word = word +"-";
    word = word + (pDate.getMonth() + 1);
    word = word +"-";
    word = word + pDate.getDate();
    return word;
  },
  formatBody: function(){
    var blah = this.body.valueOf()
    console.log(blah);
    return blah
  }
});

/*****************************************************************************/
/* Post: Lifecycle Hooks */
/*****************************************************************************/
Template.Post.created = function () {
};

Template.Post.rendered = function () {
};

Template.Post.destroyed = function () {
};