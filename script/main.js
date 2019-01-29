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
      printlineml3(resultsmls3);
      pieml3(resultsmls3);
      printlineteamml3(resultsmls3);
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



function printlineteamml3(resultsmls3)
{
  var dataml3t1 = resultsmls3['team_efficiency']['data']['Team1'];
  var dataml3t2 = resultsmls3['team_efficiency']['data']['Team2'];
  var dataml3t3 = resultsmls3['team_efficiency']['data']['Team3'];
  // console.log(dataml3t1);
  // console.log(dataml3t2);
  // console.log(dataml3t3);

  new Chart(document.getElementById("linechartteamml3"), {
  type: 'line',
  data: {
    labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    datasets: [{
        data: dataml3t1,
        label: "Team 1",
        borderColor: "#3e95cd",
      }, {
        data: dataml3t2,
        label: "Team 2",
        borderColor: "#8e5ea2",
      }, {
        data: dataml3t3,
        label: "Team 3",
        borderColor: "#3cba9f",
      },
    ]
  },
  options: {
    title: {
      display: true,
      text: 'fatturato per team'
    }
  }
});
}


function printlineml3(resultsmls3)
{
  var dataml3 = resultsmls3['fatturato']['data'];

  var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
     var ctx = $('.linechartml3');
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
                 data: dataml3,
             }]
         },

     });
}



function pieml3(resultsmls3)
{
  var datapieml3 = resultsmls3['fatturato_by_agent']['data'];

  var nomiagenti = [];
  var resultspieml3 = [];
  for (var nomeagente in datapieml3) {
    nomiagenti.push(nomeagente);
    resultspieml3.push(datapieml3[nomeagente]);
  }


  var myPieChart = new Chart($('.piechartml3'), {
      type: 'pie',
      data: {
          datasets: [{
              data: resultspieml3,
              backgroundColor: ['red','yellow','violet','blue']
          }],
          labels: nomiagenti

      }
  });
}










// var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
//    var ctx = $('.linechartml3');
//    var chart = new Chart(ctx, {
//        // The type of chart we want to create
//        type: 'line',
//
//        // The data for our dataset
//        data: {
//            labels: mesi,
//            datasets: [{
//                label: "Vendite",
//                backgroundColor: 'rgb(255, 99, 132)',
//                borderColor: 'rgb(255, 99, 132)',
//                data: dataml1,
//            }]
//        },
//
//    });





























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
