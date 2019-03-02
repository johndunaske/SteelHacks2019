from flask import Flask, render_template
import sorterer

app = Flask(__name__)


@app.route('/')
def html():
    return render_template('index.html')


@app.route('/charts.js')
def charts():
    return render_template('charts.js')


@app.route('/filter')
def getData():
    return sorterer.filter('')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8080', debug=True)
