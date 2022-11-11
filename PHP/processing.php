<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="/JS/drop-down.js"></script>
    <link rel="stylesheet" href="/CSS/shop-item-template.css" type="text/css" />
    <link rel="stylesheet" href="/CSS/nav-template.css" type="text/css" />
    <link rel="stylesheet" href="/CSS/processing.css" type="text/css"/>
    <title>Coffee Logic Successful Payment</title>
  </head>
  <body>
    <nav id="nav">
      <img
        id="banner"
        onclick="location.href='../index.html'"
        src="/images/coffee-banner-w-loop-lighter.png"
        alt="Coffee Logic"
      />
      <ul id="nav-list">
        <li class="nav-item"><a href="../index.html">Home</a></li>
        <li class="nav-item"><a href="../about.html">About</a></li>
        <li class="nav-item"><a href="../shop.html">Shop</a></li>
        <li class="nav-item"><a href="../contact.html">Contact</a></li>
      </ul>
      
      <div class="wrapper">
        <button type="button" class="drop-btn">
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            enable-background="new 0 0 32 32"
            id="Glyph"
            version="1.1"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z"
              id="XMLID_314_"
            />
            <path
              d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"
              id="XMLID_315_"
            />
            <path
              d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"
              id="XMLID_316_"
            />
          </svg>
        </button>
      </div>
    </nav>

    <div class="drop-content">
      <ul id="drop-ul">
        <li class="nav-item" onclick="location.href='index.html'">
          <a href="index.html">Home</a>
        </li>
        <li class="nav-item" onclick="location.href='about.html'">
          <a href="about.html">About</a>
        </li>
        <li class="nav-item" onclick="location.href='shop.html'">
          <a href="shop.html">Shop</a>
        </li>
        <li class="nav-item" onclick="location.href='contact.html'">
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>

    <div class="container">
      <h1>Thank you for your purchase</h1>
      <hr id="splitter">
      <h2>Your Credentials are: </h2>
      <ul id="credentials">
        <li class="cred-item">First Name: <span><?php echo $_POST['first'];?></span></li>
        <li class="cred-item">Last Name: <span><?php echo $_POST['last'];?></span></li>
        <li class="cred-item">Address: <span><?php echo $_POST['address'];?></span></li>
      </ul>
      
      
    </div>

    <footer id="footer">
      <ul id="footer-list">
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </footer>
  </body>
</html>
