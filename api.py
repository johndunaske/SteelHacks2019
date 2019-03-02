#!/usr/bin/python
# -*- coding: iso-8859-5 -*-

import urllib
import ast
#import HTMLParser as h

def subFinder(subject):
    url = ('https://newsapi.org/v2/everything?q='+subject+'&from=2019-03-2&sortBy=popularity&language=en&apiKey=21993a36882f4eb48b98a4a27e20f4ec')
    response = urllib.urlopen(url)
    null = None
    jso = eval(response.read())

    ret = []
    for key in jso['articles']:
        ret.append({key['source']['name']: key['title']})
    return ret
