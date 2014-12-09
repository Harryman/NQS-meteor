PullController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe("classes");
  	return Meteor.subscribe("all_events",{"_id": new Meteor.Collection.ObjectID(this.params._id)},{})
  },

  data: function () {
  	return NqsEvent.findOne();
  },

  action: function () {
    this.render();
  }
});