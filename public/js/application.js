$(document).ready(function () {

  $("#create_event").submit(function(e) {
    e.preventDefault();
    var eventData = $(this).serialize();

    var request = $.ajax({
      type: this.method,
      url: this.action,
      data: eventData
    });

    request.done(function(response) {
      window.location=response;
    });

    request.fail(function(response) {
      $("#errors").html(response.responseText);
    });
  });

});
