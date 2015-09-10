addEventListener('load', function() {
  var startButton = document.querySelector("#startButton"),
    categoriesInput = document.querySelector('#categories'),
    maxScoreInput = document.querySelector('#maxScore'),
    categories = null,
    maxScore = null;

  startButton.addEventListener('click', function() {
    categories = categoriesInput.value;
    maxScore = maxScoreInput.value;

    if(/^\d+$/.test(categories) && /^\d+$/.test(maxScore)){
      categories = Number(categories);
      maxScore = Number(maxScore);

      if(categories < 25){
        sessionStorage.categories = categories;
        sessionStorage.maxScore = maxScore;
        window.location.href = 'grid.html'; // --> i have no idea
      }
    }
    else {
      // replace line with bettet alert system
      alert('Invalid');
    }
  });
});
