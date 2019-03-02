import main.js
var Publishers = main.articles
var Art_Titles = main.contents
var scores = main.scores
var tpositive = 0
var tnegative = 0

for (int z = 0; x < scores.length; x++){
  if (scores[z] >= 0.0){
    barData[0]["y"].push(score[z])
    barData[0]["x"].push("Publisher: " + Publishers[z] + '\n' + "Article: " + Art_Titles[z])
    tpositive += 1
  }else{
    barData[1]["base"].push(score[z])
    barData[1]["y"].push(Math.abs(score[z]))
    barData[1]["x"].push("Publisher: " + Publishers[z] + '\n' + "Article: " + Art_Titles[z])
    tnegative += 1
  }
}

var barData = [
  {
    type: 'bar',
    x: ['News Source 1', 'News Source 2', 'News Source 3'],
    y: [500,600,700],
    base: 0,
    marker: {
      color: 'blue'
    },
    name: 'Positive Connotation'
  },
  {
    type: 'bar',
    x: ['News Source 1', 'News Source 2', 'News Source 3'],
    y: [300,400,700],
    base: [-300,-400,-700],
    marker: {
      color: 'red'
    },
    name: 'Negative Connotation'
  }]

Plotly.newPlot('tConnotation', data);

var piData = [{
  values: [tpositive, tnegative],
  labels: ['Positive Connotation', 'Negative Connotation'],
  type: 'pie'
}];

var piLayout = {
  height: 400,
  width: 500
};

Plotly.newPlot('tPercentage', piData, piLayout);
