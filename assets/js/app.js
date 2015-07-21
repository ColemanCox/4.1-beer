(function() {
  var beersEl = document.querySelector('.beers');
   var templateString = document.querySelector('#beers-template').innerHTML;


    var h = Handlebars.compile(templateString);

    var result = beerData.data.results.forEach(function(beer) {
      return (beers);
     }, '');

  beersEl.innerHTML = result;
})();
