function getJoke() {
    var url = 'https://api.icndb.com/jokes/random';

    function apiSuccess(response) {
      var jokeArray = [];
        $.each(response, function(i, item){
          var jokeEntry = JSON.stringify(item);
          jokeArray.push(jokeEntry);
        });
      var chuckNorrisJokeRaw = jokeArray[1];
      var chuckNorrisJoke = JSON.parse(chuckNorrisJokeRaw).joke;
      var chuckNorrisJokeRefined = chuckNorrisJoke.replace(/&quot;/g, '"');
      $("#chuckNorrisJoke").html(chuckNorrisJokeRefined)
    }

    $.ajax({
        url: url,
        dataType: 'jsonp',
        error: function(xhr, status, error) {
            alert(error.message);
        },
        success: apiSuccess
    });
    return false;
}

$(document).ready(function() {
  getJoke();
});
