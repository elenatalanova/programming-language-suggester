$(document).ready(function() {
  $("form#languageSuggester").submit(function(event) {
    const name = $("input#personName").val();
    const techField = $("input#question1").val();
    const typeOfDevelopment = $("input:radio[name=question2]:checked").val();
    const attentivness = document.querySelector("#question3");
    const output = document.querySelector(".question3-output");

    output.textContent = question3.value;

    question3.addEventListener("input", function() {
     output.textContent = question3.value;
      
    $(".personName").text(name);
    $(".question1").text(techField);
    $(".question2").text(typeOfDevelopment);
    $(".question3").text(attentivness);

    event.preventDefault();
    $("#output").show();
    });
  });
});