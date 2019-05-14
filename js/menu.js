var menuOpened = false;
const btn = document.querySelector('#btn-menu-main');
const ul = document.querySelector('#navbar ul');

btn.addEventListener('click', () => {
    if (!menuOpened)
    {
      ul.classList= "show";
      menuOpened = true;
      btn.classList= "btn rotate";
    } else {
      ul.classList = "hide";
      menuOpened = false;
      btn.classList= "btn";
    }
});

window.onresize = function(event) {
  var width = window.innerWidth;
  if (width >= 768) {
     ul.classList = "";
     menuOpened = false;
     btn.classList= "btn";
  }
};
