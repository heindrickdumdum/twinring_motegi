import $ from 'jquery';

$('.moreless-button .member-pass-span').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button .member-pass-span').text() == "その他全７つのお得な特典と入会方法") {
    $(this).addClass("is-open");
    $(this).text("閉じる");
  } else {
    $(this).text("その他全７つのお得な特典と入会方法");
    $(this).removeClass("is-open");
  }
});
