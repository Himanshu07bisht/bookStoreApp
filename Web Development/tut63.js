const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
      <style>
          .navbar {
              background-color: black;
              border-radius: 30px;
          }
  
          .navbar ul {
              /* overflow:auto is used to regain the background color  */
              overflow: auto;
          }
  
          .navbar li {
              float: left;
              /* list-styling tag is used to remove bullet point */
              list-style: none;
              margin: 13px 20px;
          }
  
          .navbar li a {
              padding: 3px 3px;
              /* text-decoration is used to remove the underline from the word */
              text-decoration: none;
              color: white;
  
          }
      </style>
  </head>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact us</a></li>
                  <div class="search">
                      This is searchboxdfd
                  </div>
              </ul>
          </nav>
      </header>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
