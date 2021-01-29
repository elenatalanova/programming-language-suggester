$(document).ready(function() {
  $("form#languageSuggester").submit(function(event) {
    event.preventDefault();

    const personName = $("input#personName").val();
    const question1 = $("select#question1").val();
    const question2 = $("input[id=question2]:checked").val();
    const question3 = $("input[id=question3]:checked").val();

    $(".personName").text(personName);
    $(".question1").text(question1);
    $(".question2").text(question2);
    $(".question3").text(question3);
    
    if (question1 === "videoGames" && question2 === "databaseAndServers" && (question3 === "option1" || question3 === "option2" || question3 === "option3")) {
      $(".languageResult1").show();

    } else if (question1 === "websites" && question2 === "gui") {
      $(".languageResult2").show(); 

    } else if (question1 === "windowsApplications" && question2 === "databaseAndServers" || question2 === "gui") {
      $(".languageResult3").show();

    } else {
      $(".languageResult1").show();       
    } 

    $(".result").show();
    $(".quiz").hide();
    });
  });