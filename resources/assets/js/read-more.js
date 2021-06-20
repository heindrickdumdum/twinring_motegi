import $ from 'jquery';

$('.moreless-button').click(function() {
  let btnMore = $(this);
  $('.moretext').slideToggle('slow',function(){

    btnMore.toggleClass('open');

  });


  // if ($('.moreless-button').html() == '<span>その他全７つのお得な特典と入会方法</span>') {

  //   $(this).html("<span>閉じる</span>");
  //   $('.moreless-button span').addClass("is-open");
  // } else {
  //   $(this).html("<span>その他全７つのお得な特典と入会方法</span>");
  //   $('.moreless-button span').removeClass("is-open");
  // }
});
