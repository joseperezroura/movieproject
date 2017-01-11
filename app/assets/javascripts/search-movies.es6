$(document).on("turbolinks:load", function () {


});



$('form[name="search-imdb"]').on("submit", function(e) {
  var form = $(this);
  e.preventDefault();
  $.ajax({
     url: "http://imdb.wemakesites.net/api/search",
     data: form.serialize(), // assuming the form has a hidden input with api_key name, containing your API key
     crossDomain: true,
     dataType: "jsonp",
     success: function(data) {
       window.console.log(data);
     }
     error: handleError
  });
});

function handleError (errorThing) {
  console.log("ERROR!");
  console.log(errorThing.responseText);
}
