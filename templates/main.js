//import plotly
var source = "";
var articles = [];
var contents = [];
var scores = [];

function run(subject){
  scores = [];
  contents = [];
  articles = [];
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/data?subject=" + subject);
  xhttp.send();
  xhttp.onreadystatechange = function(){
      if (xhttp.readyState === 4 && xhttp.status === 200){
      parseArticles(JSON.parse(xhttp.response));


      console.log("working...");
      for (var i = 0; i < contents.length; i++) {
        requesting(contents[i]);
      }

      }
  };
  console.log(scores)
}

function requesting(input) {
  xhttp2 = new XMLHttpRequest();
  xhttp2.open("GET", "/gcl?contents=" + input, false)
  xhttp2.onreadystatechange = function() {
    if (xhttp2.readyState === 4 && xhttp2.status === 200) {
      response = xhttp2.response;
      jso = JSON.parse(response);
      scores.push(jso);
    }
  };

  xhttp2.send();
}

function parseArticles(kvsL) {
  for (var i in kvsL) {
    for (var keys of Object.keys(kvsL[i])) {
      articles.push(keys);
      contents.push(kvsL[i][keys]);
    }
  }
}
