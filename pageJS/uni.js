function expandNav() {
    if(window.screen.width < 800) {
    if ($('nav').hasClass('open')) {
      $('.Nav').css('display', 'none');
      $('nav').removeClass('open');
    } else {
      $('.Nav').css('display', 'block');
      $('nav').addClass('open');
      //  $('.Nav::').css('transform', 'translateX(110px)');
    }
  }
}
