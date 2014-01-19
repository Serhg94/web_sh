<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>events | webSH</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <link href="css/codiqa.ext.css" rel="stylesheet">
  <link href="css/jquery.mobile.theme-1.3.1.css" rel="stylesheet">
  <link href="css/jquery-mobile.css" rel="stylesheet">
  <link href="css/jquery.mobile.structure-1.3.1.css" rel="stylesheet">

  <script src="js/jquery-1.9.1.js"></script>
  <script src="js/jquery.mobile-1.3.1.js"></script>
</head>
<body>
  <div data-role="page" data-control-title="events" id="page10">
      <div data-role="content">
          <div class="ui-grid-a">
              <div class="ui-block-a">
                  <h2>
                      События
                  </h2>
              </div>
              <div class="ui-block-b">
                  <a data-role="button" href="index.html" data-icon="refresh" data-iconpos="top">
                  </a>
              </div>
          </div>
          <div data-controltype="htmlblock">
              <p>
                <?php
					include ("php\stats.php");
				?>
              </p>
          </div>
      </div>
  </div>
</body>
</html>
