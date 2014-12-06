EventsController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('all_events',{},{});
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});