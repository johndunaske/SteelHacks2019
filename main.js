import plotly
var source = ""
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
    pubFinder("put the input from textbox on second page here")
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

}
