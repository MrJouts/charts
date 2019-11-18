// Generales
Chart.defaults.global.defaultFontFamily = 'Open Sans';
Chart.defaults.global.legend.fontSize = 20;

Chart.plugins.unregister(ChartDataLabels);

// Chart.defaults.global.plugins.datalabels.font.size = 20;

// Dias pormedio de las operaciones
var operaciones = document.getElementById('operaciones').getContext('2d');
var myChart = new Chart(operaciones, {
  type: 'bar',
  data: {
    labels: ['En curso', 'Finalizadas'],
    datasets: [{
      label: 'Promedio',
      data: [9.84, 15.6],
      backgroundColor: [
      'rgba(255, 159, 64, 0.2)',
      'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
      'rgba(255, 159, 64, 1)',
      'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
});

// Operaciones por convenios
var dias = document.getElementById('dias').getContext('2d');
var myPieChart = new Chart(dias, {
  type: 'doughnut',
  data: {
    labels: ['Acindar', 'Garantizar', 'Don Mario'],
    datasets: [{
      label: '# of Votes',
      data: [3, 96, 1],
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: {
        display: false,
        labels: {
          display: true,
          fontSize: 20
        }
      }
    },
    legend: {
      position: 'right',
      labels: {
        fontSize: 16,
        fontFamily: "Open Sans"
      }
    }
  }
});

// Clientes
var clientes = document.getElementById('clientes').getContext('2d');
var myPieChart = new Chart(clientes, {
  type: 'doughnut',
  data: {
    labels: ['Nuevos', 'Vigentes'],
    datasets: [{
      label: '# of Votes',
      data: [22, 78],
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: {
        display: false
      }
    },
    legend: {
      position: 'right',
      labels: {
        fontSize: 16,
        fontFamily: "Open Sans"
      }
    }
  }
});

// Operaciones por mes
var mes = document.getElementById('mes').getContext('2d');
var myPieChart = new Chart(mes, {
  type: 'line',
  data: {
    labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'],
    datasets: [{
      label: 'Operaciones',
      data: [5, 51, 117, 62, 83, 21],
      backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  plugins: [ChartDataLabels],
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        backgroundColor: "white",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#ddd",
        font: {
          size: 15,
          weight: "bold",
          lineHeight: 1.5
        },
        padding: {top: 5, left: 10, bottom: 5, right: 10 },
        align: "center"
      }
    }
  }
});