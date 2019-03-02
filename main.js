//import plotly
var source = ""
var article = []
var singleArticle = ""
var depressed = []
function pub(){
  source = "Publication"
}
function sub(){
  source = "Subject"
}
function url(){
  source = "Url"
}

function fchooser(source){
  if (source == "Publication"){
    article = pubFinder("put the input from textbox on second page here")
    for (var x = 0; x < article.length; x++){
      depressed[x] = colinsfunction(article[x])
    }
  }else if (source == "Subject") {
    subFinder("put the input from textbox on second page here")

  }else if(source == "Url"){
    urlFinder("put the input from textbox on second page here")
  }else{
    "2nd page textbox.text" = "Source Not Found"
  }
}
function pubFinder(publication){

}
function subFinder(subject){

}
function urlFinder(url){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200){
      singleArticle = this.response;


      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
