(function(){
return
  pgAdmin.Browser = pgAdmin.Browser || {};

  _.extend(pgAdmin.Browser, {
    report_error: function(title, message, info) {
console.log(title,message,info)
    }
  });

  return pgAdmin.Browser.report_error;
})()