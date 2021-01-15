$(document).ready(function() {
  $(#formOne).submit(function(event) {
    event.preventDefault();
    const personInput = $("#personName").val();
    const developmentType = $("#question1").val();
    $("#personName").text(personNameInput);
  });
});