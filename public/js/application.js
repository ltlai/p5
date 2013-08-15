$(document).ready(function () {

  $("#create_event").submit(function(e) {
    e.preventDefault();
    var eventData = $(this).serialize();

    $.ajax({
      type: this.method,
      url: this.action,
      data: eventData
    }).done(function(response) {
      console.log("Response:", response);
      window.location=response;
    }).fail(function(jqXHR, textStatus, error) {
      console.log("Error:", jqXHR.responseText);
      $("#errors").html(jqXHR.responseText);
    });
  });

});
