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
  values: [19, 26, 55],
  labels: ['Positive Connotation', 'Negative Connotation'],
  type: 'pie'
}];

var piLayout = {
  height: 400,
  width: 500
};

Plotly.newPlot('tPercentage', piData, piLayout);
