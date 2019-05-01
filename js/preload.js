document.body.onload = function() {
  setTimeout(function () {

    var preloader = document.getElementById('page-preload');
    if ( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done');
    }
  },  500);

}