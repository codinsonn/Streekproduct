<!DOCTYPE html>
<html lang="en">
<head>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'PT+Sans::latin' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>
	<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>#NeusVoorPassie | Bestel</title>
  <!--<base href="http://student.howest.be/thorr.stevens/20152016/MAIII/STREEKPRODUCT/">-->
  <base href="http://localhost:1124/thorr.stevens/20152016/Streekproduct/">
  <link rel="icon" href="favicon.png">
  <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body class="order">

  <!-- Navigation -->
  <div class="burger open hide">
    &nbsp;
  </div>
  <nav class="menu open">
    <a href="index.html#intro" id="logo"><span>Geldhof Cuberdons</span></a>
    <ul>
      <li><a href="index.html#cadeaus">Valentijn Covers</a></li>
      <li><a href="index.html#win">Deel en Win</a></li>
      <li><a href="index.html#streek">Streekproduct</a></li>
      <li><a href="bestel.php" class="active">Bestellen</a></li>
      <li><a href="game.html">Het Spel</a></li>
    </ul>
  </nav>
  <!-- / Navigation -->

  <!-- Header -->
  <header id="header">

    <h1 class="orderTitle">Personaliseer &amp; Bestel</h1>

    <div class="headerBgSmall">&nbsp;</div>

  </header>
  <!-- / Header -->

  <?php

    if(!empty($_POST)){

      $personalMessage = $_POST['txtPersonalMessage'];
      $fullName = $_POST['txtFullName'];
      $address = $_POST['txtAddress'];
      $telNr = $_POST['txtTelNr'];

      $to = $_POST['txtEmail'];
      $from = "neusvoorpassie@geldhof.com";
      $subject = "Valentinebox Bestelling Opgenomen!";

      $headers = "MIME-Version: 1.0\r\n";
      $date = date('D, d\t\h M Y h:i:s O');
      $headers .= "Date: {$date}\r\n";
      $headers .= "From: {$from}\r\n";
      $headers .= "Reply-To: {$from}\r\n";
      $headers .= "Subject: {$subject}\r\n";
      $headers .= "X-Sender: {$from}\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

      $message = "<html>\r\n";
      $message .= "<body>\r\n";
      $message .= " <h2>Bevestiging Bestelling:</h2>";
      $message .= " <p>-------------------------------</p>";
      $message .= " <h1>1x Valentinebox Cuberdons</h1>";
      $message .= " <p>\"{$personalMessage}\"</p>\r\n";
      $message .= " <p>{$fullName}</p>\r\n";
      $message .= " <p>{$address}</p>\r\n";
      $message .= " <p>{$telNr}</p>\r\n";
      $message .= " <p>-------------------------------</p>";
      $message .= " <p>Uw persoonlijke valentijnsbox zal op 11, 12 of 13 februari rechtstreeks van de productielijn naar uw address worden gebracht.</p>";
      $message .= " <p>(Jammer genoeg is #NeusVoorPassie echter geen echte campagne... Wij nemen dan dus ook geen verantwoordelijkheid voor enige betaalde bestellingen. Er word niks teruggestort. U passeert niet langs start.)</p>";
      $message .= "</body>\r\n";
      $message .= "</html>\r\n";

      mail($to, $subject, $message, $headers);

      $success = true;

  ?>

  <!-- Bevestiging -->
  <article id="confirm">

    <header>
      <h1>Bestelling opgenomen!</h1>
    </header>

    <div class="valentineBox">&nbsp;</div>

    <p>Er is een bevestigings e-mail verzonden naar het opgegeven mail-adres.</p>

    <a href="index.html">Terug naar Homepage</a>

  </article>
  <div class="bgRadial2">&nbsp;</div>
  <!-- / Bevestiging -->

  <?php

    }else{

  ?>

  <!-- Personaliseer -->
  <article id="bestel">

    <header>
      <h1>Personaliseer</h1>
    </header>

    <form action="" method="post">

      <fieldset class="personaliseer">

        <legend>Persoonlijke Boodschap</legend>

        <label for="txtPersonalMessage">Wat wilt u dat er op de Valentijncover gedrukt word?</label>
        <textarea name="txtPersonalMessage" required autofocus placeholder="&quot;Voor mijn liefste neuzeke&quot;"></textarea>

      </fieldset>

      <div class="valentineBox">&nbsp;</div>

      <fieldset class="info">

        <legend>Personal Info</legend>

        <label for="txtFullName">Uw volledige naam</label>
        <input type="text" name="txtFullName" required id="txtFullName" value=""/>

        <label for="txtEmail">Uw e-mail address</label>
        <input type="email" name="txtEmail" required id="txtEmail" value=""/>

        <label for="txtAdress">Uw address</label>
        <input type="text" name="txtAdress" required id="txtAdress" value=""/>

        <label for="txtTelNr">Uw telefoon / gsm Nr.</label>
        <input type="tel" name="txtTelNr" required id="txtTelNr" value=""/>

        <input type="submit" name="submit" id="btnBestel" value="Bestellen"/>

      </fieldset>

    </form>

  </article>
  <div class="bgRadial">&nbsp;</div>
  <!-- / Personaliseer -->

  <?php
    }
  ?>
  <div class="petal petal2">&nbsp;</div>
  <div class="petal petal4">&nbsp;</div>
  <div class="petal petal5">&nbsp;</div>

  <script src="js/vendor/phaser.min.js"></script>
  <script src="js/script.js"></script>
</body>
</html>
