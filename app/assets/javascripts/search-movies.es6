$(document).on("turbolinks:load", function () {

$('.js-add-movie').on("click", addMovie);



var info = {};
var $Form = $('form');
var $Container = $('#container');
var movie = $('#movies')


$Container.hide();
movie.hide();

// div hidden

$Form.on('submit', function(p_oEvent){
    var sUrl, sMovie, oData;
    p_oEvent.preventDefault();

sMovie = $Form.find('input').val();
    sUrl = 'https://www.omdbapi.com/?t=' + sMovie + '&type=movie&tomatoes=true'
    
    $.ajax(sUrl, {
        complete: function(p_oXHR, p_sStatus){
            oData = $.parseJSON(p_oXHR.responseText);

            console.log(oData);

            info.title = oData.Title
            info.year = oData.Year
            info.plot = oData.Plot
            info.poster = oData.Poster
            info.tomatoURL = oData.tomatoURL

            $Container.find('.title').text(oData.Title);

            $Container.find('.plot').text(oData.Plot);

            $Container.find('.poster').html('<img src="' + oData.Poster + '"/>');

            $Container.find('.year').text(oData.Year);

            $('.tomatoURL').text(oData.tomatoURL);

            $('.tomatoURL').attr('href', oData.tomatoURL);


            $Container.show();



            $('.js-title').append(info.title);

            movie.show();


// append all the movie info to the movie list on the side of the page
// add an on click to the movie title in the list so that when you click it, it show the div that is hidden by default

        }
    });    
});
function addMovie( ){
  $.ajax({
    type: "POST",
    url: "/movies",
    data: info,
    success: function(responseText){
      console.log(responseText);
    },
    error: function(err){
      console.log(err);

    }
  });
}

});
