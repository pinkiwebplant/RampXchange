// $('.u4m-accordion .accTitle').click(function() {
//   $(this).parent().siblings('.accItem').removeClass('activeAcc');
//   $(this).parent().siblings('.accItem').find('.accCont').slideUp(250);
//   $(this).next('.accCont').slideToggle(250);
//   $(this).parent().toggleClass('activeAcc');
//   return false;
// });


$('.u4m-accordion .accItem').click(function() {
  $(this).siblings('.accItem').removeClass('activeAcc');
  $(this).siblings('.accItem').find('.accCont').slideUp(250);
  $(this).children('.accCont').slideToggle(250);
  $(this).toggleClass('activeAcc');
  return false;
});

$('.u4m-accordion .accItem').first().addClass('activeAcc');
$('.u4m-accordion .accItem').first().children('.accCont').slideDown(250);

