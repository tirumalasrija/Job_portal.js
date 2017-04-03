/*
 *  Document   : readyDashboard.js
 *  Author     : pixelcave
 *  Description: Custom javascript code used in Dashboard page
 */

var ReadyDashboard = function() {

    return {
        init: function() {
            /*
             * With CountTo, Check out examples and documentation at https://github.com/mhuggins/jquery-countTo
             */
            $('[data-toggle="counter"]').each(function(){
                var $this = $(this);

                $this.countTo({
                    speed: 1000,
                    refreshInterval: 25,
                    onComplete: function() {
                        if($this.data('after')) {
                            $this.html($this.html() + $this.data('after'));
                        }
                    }
                });
            });

            /*
             * Flot Charts Jquery plugin is used for charts
             *
             * For more examples or getting extra plugins you can check http://www.flotcharts.org/
             * Plugins included in this template: pie, resize, stack, time
             */

            // Get the element where we will attach the chart
            var chartClassicDash    = $('#chart-classic-dash');

            // Data for the chart
            var dataEarnings        = [[1, 1900], [2, 2300], [3, 3200], [4, 2500], [5, 4200], [6, 3100], [7, 3600], [8, 2500], [9, 4600], [10, 3700], [11, 4200], [12, 5200]];
            var dataSales           = [[1, 850], [2, 750], [3, 1500], [4, 900], [5, 1500], [6, 1150], [7, 1500], [8, 900], [9, 1800], [10, 1700], [11, 1900], [12, 2550]];
            var dataTickets         = [[1, 130], [2, 330], [3, 220], [4, 350], [5, 150], [6, 275], [7, 280], [8, 380], [9, 120], [10, 330], [11, 190], [12, 410]];

            var dataMonths          = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];

            // Classic Chart
            $.plot(chartClassicDash,
                [
                    {
                        label: 'Earnings',
                        data: dataEarnings,
                        lines: {show: true, fill: true, fillColor: {colors: [{opacity: .01}, {opacity: .06}]}},
                        points: {show: true, radius: 4}
                    },
                    {
                        label: 'Sales',
                        data: dataSales,
                        lines: {show: true, fill: true, fillColor: {colors: [{opacity: .10}, {opacity: .05}]}},
                        points: {show: true, radius: 4}
                    },
                    {
                        label: 'Tickets',
                        data: dataTickets,
                        lines: {show: true, fill: true, fillColor: {colors: [{opacity: .10}, {opacity: .05}]}},
                        points: {show: true, radius: 4}
                    }
                ],
                {
                    colors: ['#297abc', '#ef4b37', '#666666'],
                    legend: {show: true, position: 'nw', backgroundOpacity:0},
                    grid: {borderWidth: 0, hoverable: true, clickable: true},
                    yaxis: {show: false, tickColor: '#f5f5f5', ticks: 3},
                    xaxis: {ticks: dataMonths, tickColor: '#f9f9f9'}
                }
            );
			
			
			
			var chartBars       = $('#chart-bars');
			
			
			var dataSalesBefore = [[1, 200], [4, 350], [7, 700], [10, 950], [13, 800], [16, 1050], [19, 1200], [22, 750], [25, 980], [28, 1300], [31, 1350], [34, 1200]];
            var dataSalesAfter  = [[2, 450], [5, 700], [8, 980], [11, 1200], [14, 1350], [17, 1200], [20, 1530], [23, 1750], [26, 1300], [29, 1620], [32, 1750], [35, 1750]];

           // var dataMonths      = [[1, 'Jan'], [2, 'Feb'], [3, 'Mar'], [4, 'Apr'], [5, 'May'], [6, 'Jun'], [7, 'Jul'], [8, 'Aug'], [9, 'Sep'], [10, 'Oct'], [11, 'Nov'], [12, 'Dec']];
            var dataMonthsBars  = [[2, 'Jan'], [5, 'Feb'], [8, 'Mar'], [11, 'Apr'], [14, 'May'], [17, 'Jun'], [20, 'Jul'], [23, 'Aug'], [26, 'Sep'], [29, 'Oct'], [32, 'Nov'], [35, 'Dec']];
			
			
			// Bars Chart
            $.plot(chartBars,
                [
                    {
                        label: 'Sales Before',
                        data: dataSalesBefore,
                        bars: {show: true, lineWidth: 0, fillColor: {colors: [{opacity:.9}, {opacity: .9}]}}
                    },
                    {
                        label: 'Sales After',
                        data: dataSalesAfter,
                        bars: {show: true, lineWidth: 0, fillColor: {colors: [{opacity: .9}, {opacity: .9}]}}
                    }
                ],
                {
                    colors: ['#ef4b37', '#287abd'],
                    legend: {show: true, position: 'nw', backgroundOpacity: 0},
                    grid: {borderWidth: 0},
                    yaxis: {ticks: 3, tickColor: '#f5f5f5'},
                    xaxis: {ticks: dataMonthsBars, tickColor: '#f5f5f5'}
                }
            );

            // Creating and attaching a tooltip to the classic chart
            var previousPoint = null, ttlabel = null;
            chartClassicDash.bind('plothover', function(event, pos, item) {

                if (item) {
                    if (previousPoint !== item.dataIndex) {
                        previousPoint = item.dataIndex;

                        $('#chart-tooltip').remove();
                        var x = item.datapoint[0], y = item.datapoint[1];

                        if (item.seriesIndex === 0) {
                            ttlabel = '$ <strong>' + y + '</strong>';
                        } else if (item.seriesIndex === 1) {
                            ttlabel = '<strong>' + y + '</strong> sales';
                        } else {
                            ttlabel = '<strong>' + y + '</strong> tickets';
                        }

                        $('<div id="chart-tooltip" class="chart-tooltip">' + ttlabel + '</div>')
                            .css({top: item.pageY - 45, left: item.pageX + 5}).appendTo("body").show();
                    }
                }
                else {
                    $('#chart-tooltip').remove();
                    previousPoint = null;
                }
            });
        }
    };
}();