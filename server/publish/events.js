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
Meteor.publish('home', function(){
	var now = new Date();
    var st  = now.getFullYear();
    st = st - 2;
    //st = st+"-01-01T00:00:00Z"
    var da = new Date();
    da.setFullYear(st);
	return NqsEvent.find({"query":{"posted":{$gte:da}},"orderby":{"posted":-1}});
})