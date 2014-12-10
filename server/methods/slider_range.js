/*****************************************************************************/
/* SliderRange Methods */
/*****************************************************************************/

Meteor.methods({
	eventYearRange:function(){
		var min =  NqsEvent.findOne({"query":{"type":"event"},"orderby":{"start":1}}).start.getFullYear();
		var max =  NqsEvent.findOne({"query":{"type":"event"},"orderby":{"start":-1}}).start.getFullYear();
		return {"min":min,"max":max};
	}
});