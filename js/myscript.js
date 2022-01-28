'use strict';

$(document).ready(function () {
  $('.nav-link').click(function (event) {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    var thisHrefAttr = $(this).attr('href');
    var thisHrefOffset = $(thisHrefAttr).offset().top;
    $('html, body').animate({ scrollTop: thisHrefOffset }, 'slow');
    event.preventDefault();
  });
});

(function () {
  var doc = document.documentElement;
  var w = window;
  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) direction = 2;
    else if (curScroll < prevScroll) direction = 1;

    if (direction !== prevDirection) toggleHeader(direction);

    prevScroll = curScroll;
    var activeID;
    $('.section_row').each(function () {
      var sectionTop = $(this).offset().top;
      if ($(document).scrollTop() > sectionTop) {
        $('.section_row').removeClass('active');
        $(this).addClass('active');
        activeID = $(this).attr('id');
      }
    });

    $('.nav-item').each(function (index, el) {
      var thisChild = $(this).children('a');
      var thisChildHref = $(this).children('a').attr('href');
      if (thisChildHref === '#' + activeID) {
        console.log('found');
        $('.nav-link').removeClass('active');
        $(thisChild).addClass('active');
      }
    });
  };

  var toggleHeader = (direction) => {
    if (direction === 2) {
      prevDirection = direction;
      $('#header').addClass('activated');
      $('#header').addClass('header--hidden');
    } else if (direction === 1) {
      prevDirection = direction;
      $('#header').removeClass('header--hidden').addClass('header--fixed');
      //$('#header').removeClass('header--hidden').addClass('header--fixed');
    }
  };

  window.addEventListener('scroll', checkScroll);
})();

var $circle = $('.cursor__inner-circle'),
  $dot = $('.cursor__inner-dot');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    x: e.clientX,
    y: e.clientY,
  });

  TweenLite.to($dot, 0.7, {
    x: e.clientX,
    y: e.clientY,
  });
}

function hoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1,
  });

  TweenLite.to($dot, 0.3, {
    scale: 1.5,
  });
}

function unhoverFunc(e) {
  TweenLite.to($circle, 0.3, {
    opacity: 1,
    scale: 1,
  });

  TweenLite.to($dot, 0.3, {
    scale: 1,
  });
}

$(window).on('mousemove', moveCircle);
$('a').hover(hoverFunc, unhoverFunc);

$('.designtext').ShuffleText(['Web App', 'Mobile App'], {
  loop: true,
  delay: 2000,
});

$('.project__card').plate({
  inverse: false,
  perspective: 500,
  maxRotation: 15,
  animationDuration: 150,
});
