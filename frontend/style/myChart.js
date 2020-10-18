new Chart(document.getElementById("myPieChart"), {
    type: 'pie',
    data: {
        labels: ['Javascript basics', 'Commands and tools', 'Express API'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#fcff33", "#334cff", "#e11931"],
            borderColor: 'rgb(0, 0, 0)',
            data: [7, 4, 5]
        }]
    },

    // Configuration options go here
    options: {}
});