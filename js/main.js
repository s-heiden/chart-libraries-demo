google.charts.load('current', {packages: ['corechart']});

google.charts.setOnLoadCallback(drawGoogleColumns);
google.charts.setOnLoadCallback(drawGoogleLines);
google.charts.setOnLoadCallback(drawGooglePie);

$(window).resize(function () {
    drawGoogleColumns();
    drawGoogleLines();
    drawGooglePie();
});

window.onload = function () {
    drawChartistColumns();
    drawChartistLines();
    drawChartistPie();
    drawChartJsColumns();
    drawChartJsLines();
    drawChartJsPie();
};


/**********************************************************************************************************************/

function drawGoogleColumns() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Preiskategorie', 'Vollpreis', 'Ermäßigt', {role: 'annotation'}],
        ['November', 96, 61, 'Ankündigung'],
        ['Dezember', 55, 37, ''],
        ['Januar', 47, 36, ''],
        ['Februar', 51, 28, ''],
        ['März', 56, 34, 'Facebook-Werbung'],
        ['April', 67, 48, 'Artikel auf derstandard.at'],
        ['Mai', 53, 31, 'Ausverkauft']
    ]);

    var options = {
        title: 'Verkaufsübersicht für Ticketpartner',
        legend: {position: 'bottom'},
        isStacked: true,
        height: 450
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('googleColumns'));
    chart.draw(data, options);
}

function drawGoogleLines() {
    var data = google.visualization.arrayToDataTable([
        ['Quartal', 'Linz', {role: 'annotation'}, 'Steyr', {role: 'annotation'}, 'Vöcklabruck', {role: 'annotation'}],
        ['Q1, 2015', 43.1, '', 31.7, '', 29.8, ''],
        ['Q2, 2015', 41.5, '', 30.9, '', 31.3, ''],
        ['Q3, 2015', 47.8, '', 30.4, '', 33.5, ''],
        ['Q4, 2015', 87.3, 'Weihnachten 2015', 46.4, '', 37.2, ''],
        ['Q1, 2016', 57.3, '', 39.8, '', 35.2, ''],
        ['Q2, 2016', 54.1, '', 37.4, '', 34.7, ''],
        ['Q3, 2016', 67.1, '', 51.9, 'Werbemaßnahmen', 36.2, ''],
        ['Q4, 2016', 94.3, 'Weihnachten 2016', 60.6, '', 46.3, ''],
        ['Q1, 2017', 78.1, '', 54.2, '', 41.7, ''],
        ['Q2, 2017', 74.1, '', 50.1, '', 38.9, ''],
        ['Q3, 2017', 69.9, '', 56.7, '', 35.4, ''],
        ['Q4, 2017', 89.3, 'Weihnachten 2017', 62.8, '', 38.4, '']
    ]);

    var options = {
        title: 'Umsatzentwicklung pro Filiale',
        legend: {position: 'bottom'},
        height: 450
    };

    var chart = new google.visualization.LineChart(document.getElementById('googleLines'));

    chart.draw(data, options);
}

function drawGooglePie() {
    var data = google.visualization.arrayToDataTable([
        ['Radiosender', 'Anteil', {role: 'tooltip'}],
        ['ORF-Regionalradios', 0.33, ''],
        ['FM4', 0.02, 'FM4 (englischsprachiger Jugendsender des ORF)'],
        ['Ö1', 0.05, ''],
        ['Kronehit', 0.08, ''],
        ['Ö3', 0.30, ''],
        ['Sonstige Privatradios', 0.22, 'Lounge.fm, Radio 88.6, Antenne Kärnten, Radio Arabella. Life Radio'],
    ]);

    var options = {
        title: 'Radio-Marktanteile 2015/16',
        is3D: true,
        legend: {position: 'bottom'},
        height: 600
    };

    var chart = new google.visualization.PieChart(document.getElementById('googlePie'));

    chart.draw(data, options);
}


/**********************************************************************************************************************/


function drawChartistColumns() {
    var data = {
        labels: ['November', 'Dezember', 'Januar', 'Februar', 'März', 'April', 'Mai'],
        series: [
            [96, 55, 47, 51, 56, 67, 53],
            [61, 37, 36, 28, 34, 48, 31]
        ]
    };

    var options = {
        stackBars: true

    }

    new Chartist.Bar('#chartistColumns', data, options).on('draw', function (data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });
}
function drawChartistLines() {
    var data = {
        labels: ['Q1, 2015', 'Q2, 2015', 'Q3, 2015', 'Q4, 2015', 'Q1, 2016', 'Q2, 2016', 'Q3, 2016', 'Q4, 2016', 'Q1, 2017', 'Q2, 2017', 'Q3, 2017', 'Q4, 2017'],
        series: [
            [43.1, 41.5, 47.8, 87.3, 57.3, 54.1, 67.1, 94.3, 78.1, 74.1, 69.9, 89.3],
            [31.7, 30.9, 30.4, 46.4, 39.8, 37.4, 51.9, 60.6, 54.2, 50.1, 56.7, 62.8],
            [29.8, 31.3, 33.5, 37.2, 35.2, 34.7, 36.2, 46.3, 41.7, 38.9, 35.4, 38.4]
        ]
    };

    new Chartist.Line('#chartistLines', data);
}

function drawChartistPie() {
    var data = {
        labels: ['ORF-Regionalradios', 'FM4', 'Ö1', 'Kronehit', 'Ö3', 'Sonstige Privatradios'],
        series: [33, 2, 5, 8, 30, 22]

    };

    new Chartist.Pie('#chartistPie', data);
}

/**********************************************************************************************************************/

// window.onload = function() {
//     drawChartJsColumns();
//     drawChartJsLines();
//     drawChartJsPie();
// };
//
function drawChartJsColumns() {
    var ctx = document.getElementById('chartJsColumns').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['November', 'Dezember', 'Januar', 'Februar', 'März', 'April', 'Mai'],
            datasets: [{
                label: 'Vollpreis',
                data: [96, 55, 47, 51, 56, 67, 53],
                backgroundColor: '#3366cc',
                borderWidth: 1
            },
                {
                    label: 'Ermäßigt',
                    data: [61, 37, 36, 28, 34, 48, 31],
                    backgroundColor: '#dc3912',
                    borderWidth: 1
                }]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Verkaufsübersicht für Ticketpartner'
            },
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        },
    });

}

function drawChartJsLines() {
    var ctx = document.getElementById('chartJsLines').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Q1, 2015', 'Q2, 2015', 'Q3, 2015', 'Q4, 2015', 'Q1, 2016', 'Q2, 2016', 'Q3, 2016', 'Q4, 2016', 'Q1, 2017', 'Q2, 2017', 'Q3, 2017', 'Q4, 2017'],
            datasets: [
                {
                    label: 'Linz',
                    borderColor: '#990099',
                    fill: false,
                    data: [43.1, 41.5, 47.8, 87.3, 57.3, 54.1, 67.1, 94.3, 78.1, 74.1, 69.9, 89.3],
                },
                {
                    label: 'Steyr',
                    fill: false,
                    borderColor: '#3366cc',
                    data: [31.7, 30.9, 30.4, 46.4, 39.8, 37.4, 51.9, 60.6, 54.2, 50.1, 56.7, 62.8]
                },
                {
                    label: 'Vöcklabruck',
                    fill: false,
                    borderColor: '#dc3912',
                    data: [29.8, 31.3, 33.5, 37.2, 35.2, 34.7, 36.2, 46.3, 41.7, 38.9, 35.4, 38.4]
                }
            ]
        },
        options: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Umsatzentwicklung pro Filiale'
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            }
        }
    });
}

function drawChartJsPie() {
    var ctx = document.getElementById('chartJsPie').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            datasets: [{
                backgroundColor: ['#990099', '#3366cc', '#dc3912', '#ff9900', '#109618', '#0099c6'],
                data: [33, 2, 5, 8, 30, 22]
            }],
            labels: ['ORF-Regionalradios', 'FM4', 'Ö1', 'Kronehit', 'Ö3', 'Sonstige Privatradios']
        },
        options: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Radio-Marktanteile 2015/16'
            }
        }
    });

}