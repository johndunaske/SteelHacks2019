//import plotly
var source = ""
var article = []
var singleArticle = ""
var depressed = []
var key='21993a36882f4eb48b98a4a27e20f4ec';//key for News API
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
// 
  function subFinder(subject){
    var url ="https://newsapi.org/v2/everything?q="+that+"&apiKey="+key;
      var request = new Request(url);
      var list=[]
      var articlefetch = {}
      fetch(request)
          .then(function(response){
              articlefetch=json.parse(response.json());
          })
          articlefetch=articlefetch["articles"];
      for(var article=0;article<articlefetch.length;article++){
          list+=articlefetch[article]["content"]
      }
      return list
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
