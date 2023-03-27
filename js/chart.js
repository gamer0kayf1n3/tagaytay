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
      data: [3518000, 3652000, 4540000, 4112000, 3940000, 4540000, 4550000, 4168000, 3790000, 4302000, 4520000, 6460000],
      backgroundColor: '#1c2c38',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 3
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
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
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  