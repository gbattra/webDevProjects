var main = function() {
  $('.article').removeClass('current');
        $(this).addClass('current');
        $(this).children('.description').slideToggle();
  });

  $(document).keypress(function(event) {
    if (event.which === 111) {
          $('.current').children('.description').slideToggle();
      };
    });


    else if(event.which === 110) {
      var currentArticle = $('.current');
      var nextArticle = currentArticle.next();
      
      currentArticle.removeClass('current');
      nextArticle.addClass('current');

      $('.article').children('.description').slideUp();
      $('.current').children('.description').slideToggle();
    }
  });
}

$(document).ready(main);