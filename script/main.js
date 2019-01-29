$(document).ready(function() {
  $.ajax({
    url: 'http://localhost/php-chartbool/server.php',
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

  $.ajax({
    url: 'http://localhost/php-chartbool/server2.php',
    method: 'GET',
    success: function(data)
    {
      var results = JSON.parse(data);
      printlineml2data(results);
      printpie(results);
    },
    error: function(err)
    {
      alert('si è verificato un errore');
    }

  });

  $.ajax({
    url: 'http://localhost/php-chartbool/server3.php',
    method: 'GET',
    success: function(data)
    {
      var resultsmls3 = JSON.parse(data);
      console.log(resultsmls3);
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


function printlineml2data(results)
{
  var dataml1 = results['fatturato']['data'];

  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
     var ctx = $('.linechartml2');
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
                 data: dataml1,
             }]
         },

     });
}

function printpie(results) {
  var dataml2 = results['fatturato_by_agent']['data'];

  var nomiagenti = [];
  var resultsml2 = [];
  for (var nomeagente in dataml2) {
    nomiagenti.push(nomeagente);
    resultsml2.push(dataml2[nomeagente]);
  }


  var myPieChart = new Chart($('.piechartml2'), {
      type: 'pie',
      data: {
          datasets: [{
              data: resultsml2,
              backgroundColor: ['red','yellow','violet','blue']
          }],
          labels: nomiagenti

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
