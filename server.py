from flask import Flask, render_template, request
import testGCL
import api

app = Flask(__name__)


@app.route('/')
def html():
    return render_template('index.html')


@app.route('/main.js')
def js():
    return render_template('main.js')


@app.route('/data')
def getData():
    result = api.data.subFinder(request.args("subject"))
    return result

@app.route('/gcl')
def gcl():
    result = testGCL.sample_analyze_sentiment(request.args["contents"])
    return result


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080', debug=True)
