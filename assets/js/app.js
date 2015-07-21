(function() {
  var beersEl = document.querySelector('.beers');
   var templateString = document.querySelector('#beers-template').innerHTML;


    var h = Handlebars.compile(templateString);

    var result = beersEl.data.results.reduce(function(beer) {
      return h(beers);
     }, '');

  beersEl.innerHTML = result;
})();
