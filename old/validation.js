addEventListener('load', function() {
  var start_button = document.querySelector("#startButton"),
    categories_input = document.querySelector('#categories'),
    max_score_input = document.querySelector('#maxScore'),
    categories = null,
    max_score = null,
    input_boxes = document.getElementsByClassName('input-box');

  // cant use for each here because input_boxes is not really an 'array'
  for(var i = 0; i < input_boxes.length; i++){

    input_boxes[i].addEventListener('focus', function(){

      var count = 0, e = event; // --> setInterval function needs access to event

      var intervalId = setInterval(function() {
        e.target.style.outline = 'rgba(249, 164, 67,' + count + ') solid 2px';
        count += 0.05;
        if(count >= 1){
          clearInterval(intervalId);
        }
      }, 10);

    });

    input_boxes[i].addEventListener('blur', function() {
      event.target.style.outline = '0';
    });

  }

  start_button.addEventListener('click', function() {
    categories = categories_input.value;
    max_score = max_score_input.value;

    if(/^\d+$/.test(categories) && /^\d+$/.test(max_score)){
      categories = Number(categories);
      max_score = Number(max_score);

      if(categories < 25){
        sessionStorage.categories = categories;
        sessionStorage.max_score = max_score;
        window.location.href = 'grid.html'; // --> i have no idea
      }
    }
    else {
      // replace line with better alert system
      alert('Invalid');
    }
  });
});
