new Chart(document.getElementById("myPieChart"), {
    type: 'pie',
    data: {
        labels: ['Javascript basics', 'Node.Js tools', 'jQuery'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ["#fcff33", "#334cff", "#e11931"],
            borderColor: 'rgb(0, 0, 0)',
            data: [3, 8, 5]
        }]
    },

    // Configuration options go here
    options: {}
});