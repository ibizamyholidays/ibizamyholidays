$(document).ready(function() {
    $('#example').DataTable({
    "paging":   false,
    "bPagination": false
    });
} );


$(function () {

    $('#container').highcharts('StockChart',{
        chart: {
		type: "line"
	},
	rangeSelector: {
		enabled: false
	},
	xAxis: {
		type: "datetime"
	},
	plotOptions:{
            series:{
                turboThreshold:10000,
                lineWidth: 1
            }
    
    },
    series: data_april
  });
  
   var chart = $('#container').highcharts(),
        buttons = $('.choice');
        
    $('.choice').click(function () {
        
        buttons.each(function() {
            var series;
            var currentBox = $(this);
            var isChecked = currentBox.is(':checked');
            var wasChecked = currentBox.data("wasChecked");
            var choice = currentBox.val();
            $('#console').innerHTML = choice;

            if(!wasChecked && isChecked)
            {
                series = chart.series[choice];
                currentBox.data("series", series);
                series.show();
            }
            
            if(wasChecked && !isChecked)
            {
                series = currentBox.data("series");
                series.hide();
            }
            
            if(isChecked)
            {
                currentBox.data("wasChecked", true);
            }
            else
            {
                currentBox.data("wasChecked", false);
            }
        });
        
    });
  
});
