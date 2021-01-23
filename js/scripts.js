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
  
    if (guestion1 === "videoGames" || "databaseAndServers" || "option3") {
      $(".yourLanguage").show("Paython");
    } else {
      $(".yourLanguage").show("JavaSkript");
    }
    });
  });
    


    
    /*$(".personName").text(name);
    $(".question1").text(techField);

    $("#yourLanguage").show();*/

    
   
    /*if (techField === videoGames) {
      yourLanguage = Python;
    } else (techField === other) {
      your language  = JavaSkript
    }*/
  
    
    
    
    
    /*const typeOfDevelopment = $("input:radio[name=question2]:checked").val();
    const attentivness = 
    const attentivness = document.querySelector("#question3");
    const output = document.querySelector(".question3-output");

    output.textContent = question3.value;

    question3.addEventListener("input", function() {
     output.textContent = question3.value;
      
    

    $(".personName").text(name);
    $(".question1").text(techField);
    $(".question2").text(typeOfDevelopment);
    $(".question3").text(attentivness);


    });
  });
});*/





/*const variables = prompt('asdf');
function qwer(vars) {
  return 'something';
}
alert(qwer(variables));

const variables = prompt('asdf');
function qwer(vars) {
  return 'something';
}
const result = qwer(variables);
alert(result);*/
