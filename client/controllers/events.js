EventsController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('all_events',{"type":"event"},{});
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});