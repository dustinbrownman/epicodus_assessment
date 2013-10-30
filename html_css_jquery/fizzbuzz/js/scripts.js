function fizzbuzz(number) {
  if (number % 15 == 0) {
    return 'fizzbuzz'
  } else if (number % 3 == 0) {
    return 'fizz'
  } else if(number % 5 == 0) {
    return 'buzz'
  } else {
    numbers = [];
    for(var i = 0; i <= number; i++) {
      numbers.push(i);
    };
    return numbers;
  }
};

$(function() {
  $('form').submit(function() {
    buzzMessage = fizzbuzz($('input#number').val());

    $('#status p').empty().append(buzzMessage).removeClass().addClass('success');
    return false;
  });
});
