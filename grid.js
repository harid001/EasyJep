addEventListener('load', function() {
  var row = document.querySelector('.row');
  for(var i = 0; i < sessionStorage.categories; i++){
    var block = document.createElement('div');
    block.className = 'block';
    row.appendChild(block);
  }

});
