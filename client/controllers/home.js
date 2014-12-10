HomeController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe("home");
  },

  data: function () {
  	return NqsEvent.find();
  },

  action: function () {
    this.render();
  }
});