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
  },
  fileTypeIcon: function(data){
    var fileChk = new RegExp("(jpg|gif|png|doc|pdf)$","i");
    var isFile = fileChk.exec(data);

    if(isFile){
      var tmp = isFile[1].toLowerCase();
      if(tmp == "jpg"||tmp == "gif"||tmp == "png"){
        return "file image outline icon";
      }
      else if(tmp == "doc"){
        return "file word outline icon";
      }
      else if(tmp == "pdf"){
        return "file pdf outline icon";
      }
    }
    else{
      var webChk = new RegExp("^(https?|ftp)://[^\s/$.?#].[^\s]*$","i");
      var isWeb = webChk.exec(data);
    }
    if(isWeb){
      return "external link icon";
    }
    else{
      var phoneChk = new RegExp("(.{7,20})(\d{0,2}\d{1,5}\d{1,5})")
      //doesn't validate, just looks to see if has about the right number of digits
      var isPhone = phoneChk.exec(data);
    }
    if(isPhone){
      return "call icon";
    }
    else{
      var nameChk = new RegExp("^(?:[A-Z][a-z\.]{1,30}\s?){1,6}$")
    }
    var isName = nameChk.exec(data);
    if(isName){
      return "user icon"
    }
  }
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});