/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

/*
 *  Example:
 *  Router.route('/', {name: 'home'});
*/
Router.route('/', {name: 'home'});
Router.route('/events', {name: 'events'});
Router.route('/rules/:file',function(){
	this.response.end();
	},
	{
		where:"server"
	});
