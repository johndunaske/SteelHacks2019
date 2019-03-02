
var tpositive = 0;
var tnegative = 0;
var tneutral = 0;

function parseData(articles, contents, scores) {
  var Publishers = articles;
  var Art_Titles = contents;
  var score = scores;

  for (var z = 0; z < scores.length; z++){
    if (scores[z] >= 0.0){
      barData[0]["y"].push(score[z]);
      barData[0]["x"].push("Publisher: " + Publishers[z] + '\n' + "Article: " + Art_Titles[z]);
      if (scores[z] == 0.0) {
        tneutral += 1
      } else {
        tpositive += 1;
      }
    }else{
      barData[1]["base"].push(score[z]);
      barData[1]["y"].push(Math.abs(score[z]));
      barData[1]["x"].push("Publisher: " + Publishers[z] + '\n' + "Article: " + Art_Titles[z]);
      tnegative += 1;
    }
  }

  console.log(tpositive + "  :  " + tnegative);

  var piData = [{
    values: [tpositive, tnegative, tneutral],
    labels: ['Positive Connotation', 'Negative Connotation', 'Neutral Connotation'],
    type: 'pie'
  }];


  Plotly.newPlot('tConnotation', barData);
  Plotly.newPlot('tPercentage', piData, piLayout);
}

var barData = [
  {
    type: 'bar',
    x: [],
    y: [],
    base: 0,
    marker: {
      color: 'blue'
    },
    name: 'Positive Connotation'
  },
  {
    type: 'bar',
    x: [],
    y: [],
    base: [],
    marker: {
      color: 'red'
    },
    name: 'Negative Connotation'
  }];


var piLayout = {
  height: 400,
  width: 500
};
