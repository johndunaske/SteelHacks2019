import urllib
import ast

def subFinder(subject):
    url = ('https://newsapi.org/v2/everything?q='+subject+'&from=2019-02-28&sortBy=popularity&language=en&apiKey=21993a36882f4eb48b98a4a27e20f4ec')
    response = urllib.urlopen(url)
    null = None
    jso = eval(response.read())

    ret = {}
    #print(jso['articles'])
    for key in jso['articles']:
        print(key["title"])
        ret.update({key['source']['name']: key['title']})
    return ret
