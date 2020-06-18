var demoApp = function () {
  var pageTitle = 'Quotes App';
  var selectedQuote= ko.observable(null);

  function getRandomQuote(){
    ajaxService.makeAjaxRequest('GET', "/getRandomQuote")
    .done(function (result) {
      console.log(result);
      selectedQuote(result);

      //data-binding
    
    }).fail(function (error) {
      console.log(error);
    });
  }


  return {
    pageTitle: pageTitle,
    selectedQuote:selectedQuote,
    getRandomQuote:getRandomQuote   
  }

}();


$(document).ready(function () {

  let elem = document.getElementById("indexPage");
  ko.applyBindings(demoApp, elem);
  demoApp.getRandomQuote();//first load

  //timer
  setInterval(
    ()=>{
      demoApp.getRandomQuote();
    },8*1000
  );
});