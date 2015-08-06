var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.article').addClass('notCurrent');
    $(this).removeClass('notCurrent');
    $(this).addClass('current');
    $('.notCurrent').children('.description').slideUp();
    $(this).children('.description').slideToggle();
  });

  $(document).keypress(function(event) {
    if(event.which === 111) {
      $('.description').hide();

      $('.current').children('.description').show();
    }

    else if(event.which === 110) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
    }
  });
}

$(document).ready(main);