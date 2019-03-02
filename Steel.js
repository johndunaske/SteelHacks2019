var key='21993a36882f4eb48b98a4a27e20f4ec';

function subfinder(that){
    var url ="https://newsapi.org/v2/everything?q="+that+"&apiKey="+key;
    var request = new Request(url);
    var list=[""]
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
