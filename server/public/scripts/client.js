$(document).ready(function(){
  //var joke = {};

  getJokes();

  $('#jokeInfo').on('submit', function(event){
    event.preventDefault();

    var joke = {};
    //convert form inputs into an array

    var inputs = $('#jokeInfo').serializeArray();

    // loop through array and add new properties and values to joke object
    inputs.forEach(function(element, index, array) {
          joke[element.name] = element.value;
        });
    postJoke(joke);


  });

  function postJoke(joke){
    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: joke,
      success: function(data){
        $('#container').empty();
        getJokes();
      }
  });
}



  function getJokes(){
    $.ajax({
      type: 'GET',
      url: '/jokes',
      success: function(data){
        // function to append jokes to DOM
        console.log(data);
        appendJokes(data);

      }
    });
  }

  function appendJokes(data){

    for(var i = 0; i < data.length; i++){
      var currentJoke = data[i];
      $('#container').append('<div class="jokeBox"></div>');
      var $jokeBox = $('#container').children().last();
      $jokeBox.append('<h2>'+currentJoke.whoseJoke +'</h2>');
      $jokeBox.append('<p>'+ currentJoke.jokeQuestion+'<p>');
      $jokeBox.append('<p>'+currentJoke.punchLine+'</p>');
    }

  }

});
