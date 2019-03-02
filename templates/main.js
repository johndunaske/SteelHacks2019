//import plotly
var source = "";
var articles = [];
var contents = [];
var scores = [];

function run(subject){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/data?subject=" + subject);
  xhttp.send();
  xhttp.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200){
      parseArticles(JSON.parse(this.response));

      for (var str of contents) {
        xhttp.open("GET", "/gcl?contents=" + str);
        xhttp.send();
        xhttp.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            response = this.response;
            console.log(response)
            scores.push(JSON.parse(this.response));
          }
        }
      }

      }
  };
  //console.log(scores)
}

function parseArticles(kvs) {
  for (var keys of Object.keys(kvs)) {
    articles.push(keys);
    contents.push(kvs[keys]);
  }
}
