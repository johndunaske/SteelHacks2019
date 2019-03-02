#!/usr/bin/python
# -*- coding: iso-8859-5 -*-

from flask import Flask, render_template, request
import json
import testGCL
import api#

app = Flask(__name__)


@app.route('/')
def html():
    return render_template('/index.html')


@app.route('/main.js')
def js():
    return render_template('main.js')

@app.route('/charts.js')
def charts():
    return render_template('charts.js')

@app.route('/resume.js')
def res():
    return render_template('js/resume.js')

@app.route('/resume.min.js')
def resm():
    return render_template('js/resume.min.js')

@app.route('/static/styles/resume.min.css')
def resmcss():
    return render_template('static/styles/resume.min.css')

@app.route('/js/resume.min.js')
def jsresm():
    return render_template('js/resume.min.js')

@app.route('/jquery.js')
def jq():
    return render_template('vendor/jquery/resume.js')

@app.route('/vendor/bootstrap/js/bootstrap.bundle.min.js')
def jqm():
    return render_template('vendor/bootstrap/js/bootstrap.bundle.min.js')

@app.route('/vendor/jquery/jquery.min.js')
def jqmv():
    return render_template('vendor/jquery/jquery.min.js')

@app.route('/vendor/jquery-easing/jquery.easing.min.js')
def jqe():
    return render_template('vendor/jquery-easing/jquery.easing.min.js')
#static/webfonts/fa-brands-400.woff2
@app.route('/static/webfonts/fa-brands-400.woff2')
def fontwoff2():
    return render_template('vendor/fontawesome-free/webfonts/fa-brands-400.woff2')

@app.route('/static/webfonts/fa-brands-400.woff')
def fontwoff():
    return render_template('vendor/fontawesome-free/webfonts/fa-brands-400.woff')

@app.route('/static/webfonts/fa-brands-400.ttf')
def fontttf():
    return render_template('vendor/fontawesome-free/webfonts/fa-brands-400.ttf')

@app.route('/static/webfonts/fa-brands-400.woff2')
def fontttf9():
    return render_template('vendor/fontawesome-free/webfonts/fa-solid-900.woff')

@app.route('/bootstrap.css')
def css():
    return render_template('vendor/bootstrap/css/bootstrap.css')

@app.route('/bootstrap.min.css')
def cssM():
    return render_template('vendor/bootstrap/css/bootstrap.min.css')


@app.route('/data')
def getData():
    result = api.subFinder(request.args['subject'])
    return json.dumps(result)

@app.route('/gcl')
def gcl():
    arg = request.args["contents"].encode('utf-8')
    result = testGCL.sample_analyze_sentiment(arg)
    return json.dumps(str(result))


if __name__ == '__main__':
    app.run(port='8080', debug=True)
