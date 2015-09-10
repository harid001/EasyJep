addEventListener('load', function() {

  var MARGIN_LEFT_RIGHT = 0.5;
  var HEIGHT = 7;

  (function (categories, max_score) {
    var row = document.querySelector('.row');
    var num_margins = 2 * (categories-1) + 2;
    var width = (98 - num_margins * MARGIN_LEFT_RIGHT) / categories;
    var margin_top_bottom = (100 - categories * HEIGHT) / num_margins ;

    for(var i = 0; i < categories; i++){
      for(var j = 0; j < categories; j++){
        var block = document.createElement('div');
        block.className = 'block';
        block.style.width = String(width) + 'vw';
        block.style.height = String(HEIGHT) + 'vh';
        block.style.marginLeft = MARGIN_LEFT_RIGHT + 'vw';
        block.style.marginRight = MARGIN_LEFT_RIGHT + 'vw';
        block.style.marginTop = margin_top_bottom + 'vh';
        block.style.marginBottom = margin_top_bottom + 'vh';
        row.appendChild(block);
      }
    }


  })(sessionStorage.categories, sessionStorage.max_score);


});
