EventsController = RouteController.extend({
  waitOn: function () {
  	return Meteor.subscribe('all_events',{"type":"event"},{});
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});