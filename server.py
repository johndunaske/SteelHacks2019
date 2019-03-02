from flask import Flask, render_template, request
import testGCL

app = Flask(__name__)


@app.route('/')
def html():
    return render_template('index.html')


@app.route('/main.js')
def charts():
    return render_template('main.js')


@app.route('/getresults') #placeholder
def getData():
    result = testGCL.sample_analyze_sentiment(request.args["data"]) #data is a placeholder
    return sorterer.filter('')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080', debug=True)
