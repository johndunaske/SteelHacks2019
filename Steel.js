var key='21993a36882f4eb48b98a4a27e20f4ec';
function byCountryfetcher(country){
    var url = 'https://newsapi.org/v2/top-headlines?' +
              'country='+country+'&' +
              'apiKey='+key;
    var request = new Request(url);
    fetch(request)
        .then(function(response) {
            return(response.json());
        })
}
function articlesabout(that){
    var url ="https://newsapi.org/v2/everything?q="+that+"&apiKey="+key;
    var request = new Request(url);
    fetch(request)
        .then(function(response){
            return(response.json)
        })
}