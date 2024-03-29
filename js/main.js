window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


$('#navbar a, #showcase .btn').on('click', function(event) {
  if (this.hash !=='') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate( {
      scrollTop: $(hash).offset().top - 100}, 800
    );
  }
})

function init() {
  var myMap = new ymaps.Map('map', {
      center: [52.117174, 26.115624],
      zoom: 17,
      controls: []
  });
  
  // Создадим экземпляр элемента управления «поиск по карте»
  // с установленной опцией провайдера данных для поиска по организациям.
  var searchControl = new ymaps.control.SearchControl({
      options: {
          provider: 'yandex#search'
      }
  });
  
  myMap.controls.add(searchControl);

  myGeoObject = new ymaps.GeoObject({
    // Описание геометрии.
    geometry: {
        type: "Point",
        coordinates: [52.117174, 26.115624]
    }
})
myMap.geoObjects
        .add(myGeoObject)
  // Программно выполним поиск определённых кафе в текущей
  // прямоугольной области карты.
}

ymaps.ready(init);