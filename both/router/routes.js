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
Router.route('/results/:ka/:mai/:file',function(){
	this.response.end();
	},
	{
		where:"server"
	});
Router.route('/points/:la/:te/:da',function(){
	this.response.end();
	},
	{
		where:"server"
	});
Router.route('/Event/:_id', {
	name: 'pull',
	template: 'Pull'
	});
