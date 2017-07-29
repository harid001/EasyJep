addEventListener('load', function() {

  var navbar = document.querySelector('.navbar'),
     navbar_row = document.querySelector('.navbar tr'),
     reverse_nav = function(reverse) {

       return function() {
         colors1 = ['#FFFFFF', '#5B5D5E'];
         colors2 = ['#4D94FF', '#FFFFFF'];
         navbar.style.backgroundColor = colors2[1 - reverse];
         for(var i = 0; i < navbar_row.children.length; i++){
           navbar_row.children[i].children[0].style.color = colors1[1 - reverse];
         }
       };

     };

  navbar.addEventListener('mouseover', reverse_nav(0));
  navbar.addEventListener('mouseout', reverse_nav(1));


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
        block.style.backgroundColor = (i === 0 || j === 0) ? '#000000' : block.style.backgroundColor;
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
