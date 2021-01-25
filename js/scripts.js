$(document).ready(function() {
  $("form#languageSuggester").submit(function(event) {
    event.preventDefault();

    const personName = $("input#personName").val();
    const question1 = $("input#question1").val();
    const question2 = $("input#question2").val();
    const question3 = $("input#question3").val();

    $(".personName").text(personName);
    $(".question1").text(question1);
    $(".question2").text(question2);
    $(".question3").text(question3);
  
    if (question1 === "videoGames", question2 === "databaseAndServers", question3 === "option1" || "option2" || "option3") {
      $(".languageResult1").show();
    } else if (question1 === "websites", question2 === "gui", question3 === "option1" || "option2" || "option3" || "option4" || "option5") {
      $(".languageResult2").show(); 
    } else if (question1 === "windowsApplications", question2 === "databaseAndServers", question3 === "option1" || "option2" || "option3" || "option4" || "option5") {
      $(".languageResult3").show();
    }
      $(".result").show();
    $(".quiz").hide();
    });
  });
    