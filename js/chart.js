var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Chart.defaults.color = "#ffffff";
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [{
      label: 'Sales',
      data:     [
        28458926,
        29516664,
        36870830,
        33153050,
        31652140,
        36721840,
        36880830,
        33727616,
        30608200,
        34785354,
        36701840,
        52646900
    ],
      backgroundColor: '#1c2c38',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      x: {
        grid: {
          color: 'darkgrey'
        }
      },
      y: {
        grid: {
          color: 'darkgrey',
          beginAtZero: true
        }
      }
    }
  }
});

var chart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Occupancy Rate',
        data: [54, 62, 70, 65, 60, 72, 70, 64, 60, 66, 72, 100],
        backgroundColor: '#1c2c38',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        x: {
          grid: {
            color: 'darkgrey'
          }
        },
        y: {
          grid: {
            color: 'darkgrey',
            beginAtZero: true
          }
        }
      }
    }
  });
  
  