import requests

def subFinder(subject):
    url = ('https://newsapi.org/v2/everything?q='+subject+'&from=2019-02-28&sortBy=popularity&apiKey=21993a36882f4eb48b98a4a27e20f4ec')
    response = requests.get(url)
    articlefetch=response["articles"]
    list={}
    var stuff= data()
    for article in articlefetch.length:
        var publisher=articlefetch[article]["publisher"]
        var content=articlefetch[article]["content"]
        # list+=stuff
        list[publisher]=content
    return list