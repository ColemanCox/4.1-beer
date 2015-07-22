
(function() {
  var beersEl = document.querySelector('.beers');
  var templateString = document.querySelector('#beers-template').innerHTML;
  var h = Handlebars.compile(templateString);

  var result = beerData.data.reduce(function(previous, beers) {
    return previous + h(beers);
  }, '');

  beersEl.innerHTML = result;

})();
var gridModeEl = document.querySelector('.grid-mode');

gridModeEL.onClick = function() {
  alert('hey sucka');

};
var listModeEl = document.querySelector('.list-mode');

listModeEL.onClick = function() {
  alert('hey suckas');}
