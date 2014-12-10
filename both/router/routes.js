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
Router.route('/results/:ka/:mai/:ha',function(){
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
Router.route('/Post/:_id', {name: 'post'});
Router.route('/Archives', {
	name: 'archives',
	template: 'ComingSoon'});
Router.route('/Contact', {
	name: 'contact',
	template: 'ComingSoon'});
Router.route('/About', {
	name: 'about',
	template:'ComingSoon'});
