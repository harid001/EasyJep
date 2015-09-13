addEventListener('load', function() {

  // create the grid
  (function (categories, max_score) {
    var width = 80 / categories;
    var height = 80 / (max_score / 100);
    var num_margins = 2 * categories;
    var margin_left_right = (100 - categories * width) / num_margins;
    var margin_top_bottom = (100 - (max_score / 100) * height) / (2 * max_score / 100);

    for(var i = 0; i < max_score / 100; i++){
      var row = document.querySelector('#row' + i);
      for(var j = 0; j < categories; j++){
        var block = document.createElement('div');
        block.className = 'block';
        block.style.float = 'left';
        block.style.outline = '#FF961F dashed 2px';
        block.style.backgroundColor = 'rgba(255, 150, 31, 0.2)';
        //block.style.backgroundColor = (i === 0 || j === 0) ? '#000000' : '#FF961F';
        block.style.width = String(width) + 'vw';
        block.style.height = String(height) + 'vh';
        block.style.marginLeft = margin_left_right + 'vw';
        block.style.marginRight = margin_left_right + 'vw';
        block.style.marginTop = margin_top_bottom + 'vh';
        block.style.marginBottom = margin_top_bottom + 'vh';
        row.appendChild(block);
      }
      var newRow = document.createElement('div');
      newRow.setAttribute('id','row' + (i+1));
      document.body.appendChild(newRow);
    }

  })(Number(sessionStorage.categories) + 1, Number(sessionStorage.max_score) + 100);




});
