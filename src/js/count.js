$(function () {
  var MIN = 1;
  $('.ui-count_decrease').attr('disabled', 'disabled');
  $('.ui-count_decrease').click(function (e) {
    var $input = $(e.currentTarget).parent().find('.ui-count_number');
    var number = parseInt($input.val()) - 1;
    if (number <= MIN) {
      number = MIN;
      $(this).attr('disabled', 'disabled');
    }
    $input.val(number);
  });
  $('.ui-count_increase').click(function (e) {
    $(this).siblings('.ui-count_decrease').removeAttr('disabled');
    var $input = $(e.currentTarget).parent().find('.ui-count_number');
    var number = parseInt($input.val()) + 1;
    $input.val(number);
  });
});