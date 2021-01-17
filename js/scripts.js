$(document).ready(function() {
  $("form#languageSuggester").click(function(event) {
    const name = $("input#personName").val();
    const techField = $("input#question1").val();
    const typeOfDevelopment = $("input:radio[name=question2]:checked").val();
    const attentivness = document.querySelector("input#question3");
    const output = document.querySelector(".range-slider");
      output.textContent = attentivness.range;
      attentivness.addEventListener("input", function() {
      output.textContent = attentivness.value;
      
    $(".personName").text(name);
    $(".question1").text(techField);
    $(".typeOfDevelopment").text(typeOfDevelopment);
    $(".slider").text(attentivness);

    event.preventDefault();
    $("#result").show();
  });
});
