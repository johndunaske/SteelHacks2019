var key='21993a36882f4eb48b98a4a27e20f4ec';

function byCountryfetcher(country){
    var countryfetch={}
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country='+country+'&' +
              'apiKey='+key;
    var request = new Request(url);
    fetch(request)
        .then(function(response) {
            countryfetch =json.parse(response.json());
        })
    for(var article=0;article<countryfetch["articles"];article++){

    }
}
function articlesabout(that){
    var url ="https://newsapi.org/v2/everything?q="+that+"&apiKey="+key;
    var request = new Request(url);
    var list=[""]
    fetch(request)
        .then(function(response){
            articlefetch=json.parse(response.json());
        })
    for(var article=0;article<articlefetch["articles"].length;article++){
        list+=article["content"]
    }
    return list
}
function pubFinder(source){
    var url="https://newsapi.org/v2/top-headlines?sources="+souurce+"&apiKey=21993a36882f4eb48b98a4a27e20f4ec"
    var sourcerequest={}
    var motherlist=[""]
    var request = new Request(url);
    fetch(request)
        .then(function(response){
            sourcerequest=json.parse(response.json());
        })
    for(var article=0;article<sourcerequest["articles"];article++){
        motherlist+=article["content"]
    }
    return motherlist
}