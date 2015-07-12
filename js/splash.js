$(document).ready(function() {
  var qa = [];

  $('#answer').keyup(function(e) {
    if (e.keyCode == 13) {
      //validate q&q pair here and post alert message
      //one of text fields does not have any text entered
      if ($('#answer').val().length < 1 || $('#question').val().length < 1) {

        $('.alert-bar').css({
          'background-color' : '#FF8282',
          'color' : '#990000'
        });
        $('.alert-bar').html('<strong>Error!</strong>&nbsp;One or more fields are blank.');
        $('.alert-bar').fadeTo(500, 1.0).delay(1000).fadeTo(500, 0, 0);

      } else {
        $('.alert-bar').css({
          'background-color' : '#ADEFAD',
          'color' : '#344834'
        });
        $('.alert-bar').html('<strong>Success!</strong>&nbsp;Question and answer saved.');
        $('.alert-bar').fadeTo(500, 1.0).delay(1000).fadeTo(500, 0, 0);
        qa.push({
          'question' : $('#question').val(),
          'answer' : $('#answer').val()
        });
      }
    }
  });



});
