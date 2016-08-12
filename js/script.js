var a = 0;
var b = 0;
var c = 0;
var d = 0;

// Start Business Logic

var logAnswer = function(answer) {
  if (answer === "a") {
    a = a + 1;
  } else if (answer ==="b") {
    b = b + 1;
  } else if (answer === "c") {
    c = c + 1;
  } else {
    d = d + 1;
  }
};

var clearDisplay = function() {
  $("#design").slideUp();
  $("#csharp").slideUp();
  $("#ruby").slideUp();
  $("#java").slideUp();
  $("#inconclusive").slideUp();
}

var displayResults = function() {
  if (a > b && a > c && a > d) {
    $("#design").slideDown();
  } else if (b > a && b > c && b > d) {
    $("#csharp").slideDown();
  } else if (c > a && c > b && c > d) {
    $("#java").slideDown();
  } else if (d > a && d > b && d > c)  {
    $("#ruby").slideDown();
  } else {
    $("#inconclusive").show();
  }


}

// Start Front-end Logic

$(document).ready(function() {
  $("#submitBtn").click(function() {
    a = b = c = d = 0;
    clearDisplay();
    logAnswer($("input:radio[name='question1']:checked").val());
    logAnswer($("input:radio[name='question2']:checked").val());
    logAnswer($("input:radio[name='question3']:checked").val());
    logAnswer($("input:radio[name='question4']:checked").val());
    logAnswer($("input:radio[name='question5']:checked").val());
    logAnswer($("input:radio[name='question6']:checked").val());
    console.log(a, b, c, d);
    displayResults();
  });

  $("#clearBtn").click(function() {
    clearDisplay();
    $("input:radio[name='question1'][value='a']").prop("checked", true);
    $("input:radio[name='question2'][value='a']").prop("checked", true);
    $("input:radio[name='question3'][value='a']").prop("checked", true);
    $("input:radio[name='question4'][value='a']").prop("checked", true);
    $("input:radio[name='question5'][value='a']").prop("checked", true);
    $("input:radio[name='question6'][value='a']").prop("checked", true);
  });

});
