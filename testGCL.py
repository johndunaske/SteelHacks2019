#!/usr/bin/python
# -*- coding: iso-8859-5 -*-

import sys

# [START language_sentiment_text]

from google.cloud import language_v1
from google.cloud.language_v1 import enums
import six


def sample_analyze_sentiment(content):
    ret = []
    # [START language_sentiment_text_core]

    client = language_v1.LanguageServiceClient()

    # content = 'Your text to analyze, e.g. Hello, world!'

    if isinstance(content, six.binary_type):
        content = content.decode('utf-8')


    type_ = enums.Document.Type.PLAIN_TEXT
    document = {'type': type_, 'content': content}

    response = client.analyze_sentiment(document)
    sentiment = response.document_sentiment

    return format(float(sentiment.score))
    #print('Magnitude: {}'.format(sentiment.magnitude))

    # [END language_sentiment_text_core]


# [END language_sentiment_text]

# if __name__ == "__main__":
#     print(sample_analyze_sentiment("fuck you"))
