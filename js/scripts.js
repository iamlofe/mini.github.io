$('.mobile_menu_click').click(function() {
  $('.list-menu').fadeToggle();
});
const navs = document.querySelectorAll('.nav-select');

navs.forEach(nav => {
  nav.addEventListener('click', e => {
    const name = nav.classList
      .toString()
      .split(' ')
      .filter(className => className != 'nav-select')
      .join('');
    if (name) {
      $('.toggleable').fadeOut();
      $('.list-menu').fadeOut();
      $(`.${name}.toggleable`).fadeIn();
    }
  });
});

$(document).mouseup(function(e) {
  var container = $('.toggleable');
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.fadeOut();
  }
});

$('#exit').click(function() {
  $('.list-menu').fadeToggle();
});

$('.bottom-bet').click(function(){
       $('.popup').fadeToggle();
    });

$('.green').click(function(){
       $('.mask1').fadeToggle();
    });
$('.bids').click(function(){
       $('.bids-list').fadeToggle();
    });