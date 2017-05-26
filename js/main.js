google.charts.load('current', {packages: ['corechart']});

google.charts.setOnLoadCallback(drawGoogleColumns);
google.charts.setOnLoadCallback(drawGoogleLines);
google.charts.setOnLoadCallback(drawGooglePie);

function drawGoogleColumns() {
    // Define the chart to be drawn.
    var data = google.visualization.arrayToDataTable([
        ['Preiskategorie', 'Vollpreis', 'Ermäßigt', { role: 'annotation' } ],
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
        legend: { position: 'bottom'},
        isStacked: true,
        height:450
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.ColumnChart(document.getElementById('googleColumns'));
    chart.draw(data, options);
}

function drawGoogleLines() {
    var data = google.visualization.arrayToDataTable([
        ['Quartal', 'Linz', { role: 'annotation' }, 'Steyr', { role: 'annotation' }, 'Vöcklabruck', { role: 'annotation' }],
        ['Q1, 2015',43.1,'', 31.7,'', 29.8, ''],
        ['Q2, 2015',41.5,'',30.9,'',31.3, ''],
        ['Q3, 2015',47.8,'',30.4,'',33.5, ''],
        ['Q4, 2015',87.3,'Weihnachten 2015',46.4,'',37.2, ''],
        ['Q1, 2016',57.3,'',39.8,'',35.2, ''],
        ['Q2, 2016',54.1,'',37.4,'',34.7, ''],
        ['Q3, 2016',67.1,'',51.9,'Werbemaßnahmen',36.2, ''],
        ['Q4, 2016',94.3,'Weihnachten 2016',60.6,'',46.3, ''],
        ['Q1, 2017',78.1,'',54.2,'',41.7, ''],
        ['Q2, 2017',74.1,'',50.1,'',38.9, ''],
        ['Q3, 2017',69.9,'',56.7,'',35.4, ''],
        ['Q4, 2017',89.3,'Weihnachten 2017',62.8,'',38.4, '']
    ]);

    var options = {
        title: 'Umsatzentwicklung pro Filiale',
        legend: { position: 'bottom'},
        height:450
    };

    var chart = new google.visualization.LineChart(document.getElementById('googleLines'));

    chart.draw(data, options);
}

function drawGooglePie() {
    var data = google.visualization.arrayToDataTable([
        ['Radiosender', 'Anteil', { role: 'tooltip' }],
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
        legend: { position: 'bottom'},
        height:600
    };

    var chart = new google.visualization.PieChart(document.getElementById('googlePie'));

    chart.draw(data, options);
}

$(window).resize(function(){
    drawGoogleColumns();
    drawGoogleLines();
    drawGooglePie();
});

window.on

/**********************************************************************************************************************/

window.onload = function() {
    drawChartistColumns();
    drawChartistLines();
    drawChartistPie();
};

function drawChartistColumns(){
    var data = {
        labels: ['November', 'Dezember', 'Januar', 'Februar', 'März', 'April', 'Mai'],
        series: [
            { "data": [96,55,47,51,56,67,53] },
            { "data": [61,37,36,28,34,48,31] }
        ]
    };

    var options = {
        stackBars: true

    }

    new Chartist.Bar('#chartistColumns', data, options).on('draw', function(data) {
        if(data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 30px'
            });
        }
    });
}

