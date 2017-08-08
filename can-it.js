var wordsList = [];

function init() {
  var wordsFile = "https://rawgit.com/cam6688/Environ-recycling/gh-pages/recycling-list.txt";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init();


function findItem() {
  var recyclable = false;
  var rec = document.getElementById("rec").value.toLowerCase();
  for (var i = 0; i < wordsList.length; i++) {
    if (rec == wordsList[i].trim()) {
      recyclable = true;
      break;
    }
  }
  printResults(recyclable);
}

function printResults(recyclable) {


  if (recyclable) {
      document.getElementById("results").innerHTML = "This item is recyclable. If you have any more questions, check our help page.";
  }else {
    document.getElementById("results").innerHTML = "This item is not recyclable. If you have any more questions, check our help page.";
  }
}



//|| rec == wordsList.includes() --for line 19
