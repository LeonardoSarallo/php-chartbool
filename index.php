<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
    <link rel="stylesheet" href="css/style.css">

    </script>
    <title>ChartBool</title>
  </head>
  <body>

    <?php /*  ?>
    <!-- <div class="container">
      <?php include 'database.php' ?>;
      <canvas class="linechart" data-database="<?php echo $database; ?>"></canvas>
    </div> -->*/ ?>


    <div class="container">

      <canvas class="linechart"></canvas>
    </div>

    <div class="container">

      <canvas class="piechart"></canvas>
    </div



    <!-- <script src="script/main.js" charset="utf-8"></script> -->
    <?php /*  ?>
    <!-- <script>
    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
    <?php include 'database.php' ?>;
    var databasePhp = '<?php echo json_encode($database); ?>'
    var database = JSON.parse(databasePhp);


    $(document).ready(function() {
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

    });

    </script> -->
     */ ?>
     <script src="script/main.js" charset="utf-8"></script>
  </body>
</html>
