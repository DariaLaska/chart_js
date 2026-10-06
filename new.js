var ourPie = $("#chartPie");
var ourLine = $("#chartLine");
var ourBar = $("#chartBar");

var linePie = new Chart(ourPie, {
//    type: 'doughnut', /* 'pie', */
    type: 'pie', /* 'pie', */
    data: {
        labels: [
            "США и ЕС",
            "Китай, Россия, Индия, Мексика, Бразилия",
            "Другие страны"
        ],
        datasets: [
            {
                label: 'Доля геополитических блоковв процентах от мирового ВВП 1990',
                data: [
                    43,
                    18,
                    39
                ],

                backgroundColor: [
                    'rgba(235, 30, 74, 0.88)',
                    'rgba(54, 208, 235, 0.81)',
                    'rgba(218, 255, 86, 0.81)'
                ],

                borderWidth: 3,

                borderRadius: 3,

                borderColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                ]
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                position: "right",
            }
        }
    }
})






var barChart = new Chart(ourBar, {
    type: 'bar',
    data: {
        labels: ["США", "Китай", "Индия", "Япония", "Германия", "Россия", "Бразилия", "Великобритания", "Франция", "Другое"],
        datasets: [
            {
                label: 'Популяция 2019 г',
                data: [15.902, 17.305, 7.094, 4.092	, 3.466, 3.098, 2.410, 2.409, 2.396, 41.822],
                backgroundColor: 'rgba(132, 31, 190, 0.4)',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'rgba(163, 54, 235, 0.9)'
            },
            {
                label: 'Популяция 2020 г',
                data: [15.900, 18.338, 6.765, 4.036, 3.416, 3.112, 2.395, 2.248, 2.278, 41.514],
                backgroundColor: 'rgba(250, 43, 29, 0.4)',
                borderWidth: 1,
                borderRadius: 3,
                borderColor: 'rgba(255, 64, 64, 0.9)'
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: "bottom",

                labels: {
                    boxWidth: 50,
                    color: "black",
                    font: {
                        size: 24,
                        weight: "bold",
                        style: "italic"
                    }
                }
            },

            tooltip: {
                cornerRadius: 0,
                caretSize: 0,
                padding: 10,
                backgroundColor: 'black',
                borderColor: "gray",
                borderWidth: 5,
                titleMarginBottom: 4,
                titleFont: {
                    "weight": "bold",
                    "size": 22
                }
            },

            title: {
                display: true,
                text: 'Самые свежие данные',
                color: "black",
                font: {
                    "weight": "bold",
                    "size": 22
                }
            }

        },

    }
})