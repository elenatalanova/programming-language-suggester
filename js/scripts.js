$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name = $("#personName").val();
    const techField = $("#question1").val();
    const typeOfDevelopment = $("input:radio[name=guestion2]:checked").val();
    const attentivness = document.querySelector("#question3");
    const output = document.querySelector(".question3-output");
    
    output.textContent = attentivness.range;

    attentivness.addEventListener("input", function() {
      output.textContent = attentivness.value;

    $(".personName").text(name);
    $(".question1").radio(techField);
    $(".question2").text(typeOfDevelopment);
    $(".question3").range(attentivness);

    $("#output").show()
  });
});
