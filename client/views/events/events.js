/*****************************************************************************/
/* Events: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Events.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Events.helpers({
  allEvents: function(){
    var yearMin = new Date()
    var yearMax = new Date()
    yearMin.setFullYear(Session.get("yearMin"))
    yearMin.setMonth(1)
    yearMin.setDate(1);
    yearMax.setFullYear(Session.get("yearMax"))
    yearMax.setMonth(12)
    yearMax.setDate(31);
    var blah = NqsEvent.find({$and:[{"start":{$gte:yearMin}},{"start":{$lte:yearMax}}]},{sort:{"start":-1}});
    return blah;
  },
  yearMin: function(){
    return Session.get("yearMin")
  },
  yearMax: function(){
    return Session.get("yearMax")
  },
  test:function(){
  }
});

/*****************************************************************************/
/* Events: Lifecycle Hooks */
/*****************************************************************************/
Template.Events.created = function () {
  var year = new Date();
  year = year.getFullYear();
  Session.set("yearMin",year-1);
  Session.set("yearMax",year+1);
};

Template.Events.rendered = function () {
  Meteor.call("eventYearRange",function(err,result){
    var year = new Date();
    year = year.getFullYear();
    $("#dateSlider").slider({
      range: true,
      min:result.min,
      max:result.max,
      values:[year-1,result.max],
    })
  });
  $("#dateSlider").slider({
    slide:function(e,ui){
      Session.set("yearMin",ui.values[0]);
      Session.set("yearMax",ui.values[1]);
    }
  });
};

Template.Events.destroyed = function () {
};