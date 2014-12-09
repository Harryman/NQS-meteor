/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
  	pullDate: function(){
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var sDate = new Date(this.start);
    var out = month[sDate.getMonth()]
    out = out +" "+ sDate.getDate();
    if(this.end){
      var eDate = new Date(this.end);
        out = out + " &";
      if(sDate.getMonth() != eDate.getMonth()){
        out = out + " " + month[eDate.getMonth()]
      }
      else{
      }
      out = out + " " + eDate.getDate();
    }
    out = out + ", " + sDate.getFullYear();
    return out;
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});