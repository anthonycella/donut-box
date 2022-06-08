$(document).ready(function() {

  $('.add-donut-button').on('click', function(event) {
    console.log('add donut running');
    let $donut = $('<div class="donut"></div>');
    $('.donut-box').append($donut);
  });
});