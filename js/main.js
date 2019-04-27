function initMap(){
  const loc = { lat: 52.117023, lng: 26.116100};
  const map = new google.maps.Map(document.querySelector('.location-map'), {
    zoom: 18,
    center: loc
  });
  const market = new google.maps.Marker({ position: loc, map: map});
}

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