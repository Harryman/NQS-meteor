/*****************************************************************************/
/* Pull: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Pull.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Pull.helpers({
  classConvert:function() {
    var hmm = [];
    if(this.classes){
      this.classes.forEach(function(clas){
        var tem = NqsClass.findOne({"abrev":clas},{"name":1});
        hmm.push(tem.name);
      })
    }
    return hmm;
  }


  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Pull: Lifecycle Hooks */
/*****************************************************************************/
Template.Pull.created = function () {
};

Template.Pull.rendered = function () {
};

Template.Pull.destroyed = function () {
};