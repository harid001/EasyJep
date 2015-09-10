addEventListener('load', function() {
  var start_button = document.querySelector("#startButton"),
    categories_input = document.querySelector('#categories'),
    max_score_input = document.querySelector('#maxScore'),
    categories = null,
    max_score = null;

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
