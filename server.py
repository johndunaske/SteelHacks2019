

from flask import Flask, render_template, request
import json
import testGCL
import api

app = Flask(__name__)


@app.route('/')
def html():
    return render_template('/searchpage.html')


@app.route('/main.js')
def js():
    return render_template('main.js')

@app.route('/indexcss.css')
def css():
    return render_template('indexcss.css')


@app.route('/data')
def getData():
    result = api.subFinder(request.args['subject'])
    return json.dumps(result)

@app.route('/gcl')
def gcl():
    arg = request.args["contents"].replace("ΓÇÖ", "'")
    result = testGCL.sample_analyze_sentiment(arg)
    print(arg.encode("utf-8"))
    return json.dumps(result)


if __name__ == '__main__':
    app.run(port='8080', debug=True)
