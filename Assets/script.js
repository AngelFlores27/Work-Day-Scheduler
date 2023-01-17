$(function () {

  $(document).on('click', 'button', function (event) {
    event.preventDefault();
    var targetHour = event.target.dataset.hour
    var targetValue = $('#' + event.target.dataset.hour).val()
    localStorage.setItem(targetHour, targetValue);
  })


  var time = dayjs().format('HH');

  function renderSections() {
    var descriptionsEl = $(".description")
    for (i = 0; i < descriptionsEl.length; i++) {
      descriptionsEl[i].textContent = localStorage.getItem(i + 9)
      if (time == i + 9) {
        descriptionsEl[i].setAttribute('class', 'col-8 col-md-10 description present');
      } else if (i + 9 > time) {
        descriptionsEl[i].setAttribute('class', 'col-8 col-md-10 description future');
      } else {
        descriptionsEl[i].setAttribute('class', 'col-8 col-md-10 description past');
      };
    }
  };

  renderSections();
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

});
