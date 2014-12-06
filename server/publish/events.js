/*****************************************************************************/
/* AllEvents Publish Functions
/*****************************************************************************/

Meteor.publish('all_events', function (match,options) {
	if(!match){
		var match = {};
	}
	if(!options){
		var options = {};
	}
	return NqsEvent.find(match,options);
});