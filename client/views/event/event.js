/*****************************************************************************/
/* Event: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Event.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Event.helpers({
  pullDate: function(){
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var sDate = new Date(this.start);
    var out = month[sDate.getMonth()]
    out = out +" "+ sDate.getDate();
    if(this.end){
      var eDate = new Date(this.end);
        out = out + " &";
      if(sDate.getMonth() != eDate.getMonth()){
        out = out + " " + month[eDate.getMonth()]
      }
      else{
      }
      out = out + " " + eDate.getDate();
    }
    out = out + ", " + sDate.getFullYear();
    console.log("this._id")
    console.log(this)
    console.log(this._id)
    console.log(this._id.str)
    console.log(this._id._str)

    return out;
  }
});

/*****************************************************************************/
/* Event: Lifecycle Hooks */
/*****************************************************************************/
Template.Event.created = function () {
};

Template.Event.rendered = function () {
};

Template.Event.destroyed = function () {
};