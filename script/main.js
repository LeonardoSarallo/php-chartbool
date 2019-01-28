$(document).ready(function() {
  $.ajax({
    url: 'http://localhost/php-chartbool/database.php',
    method: 'GET',
    success: function(data)
    {
      var database = JSON.parse(data);
      printline(database);
    },
    error: function(err)
    {
      alert('si è verificato un errore');
    }

  });

});


function printline(database)
{   var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    var ctx = $('.linechart');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: mesi,
            datasets: [{
                label: "Vendite",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: database,
            }]
        },

    });
}


function printpie() {
  var myPieChart = new Chart($('.piechart'), {
      type: 'pie',
      data: {
          datasets: [{
              data: arrayAmounts,
              backgroundColor: ['red','yellow','violet','blue']
          }],
          labels: arrayLabels

      }
  });
}











//
//
// var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
// var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
//
//
// $(document).ready(function() {
//   var database = $('.linechart').data('database');
//   var ctx = $('.linechart');
//   var chart = new Chart(ctx, {
//       // The type of chart we want to create
//       type: 'line',
//
//       // The data for our dataset
//       data: {
//           labels: mesi,
//           datasets: [{
//               label: "Vendite",
//               backgroundColor: 'rgb(255, 99, 132)',
//               borderColor: 'rgb(255, 99, 132)',
//               data: database,
//           }]
//       },
//
//   });
//
// });
