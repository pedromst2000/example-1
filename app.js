const http = require("http"); //http server
const db = require("./modules/connect"); //database connection

const PORT = 5000;

const server = http.createServer((req, res) => {
  let txt = "<html><body>";
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/authors") {
    db.query("SELECT * FROM authors", (err, rows, fields) => {
      let html = "<html><body>";

      if (err) throw err;

      let JSON_ = JSON.stringify(rows);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON_);
      res.end();

      // print the results
      //       rows.forEach((row) => {
      //         console.log(`${row.name} lives in ${row.city}`);
      //       });
      //       // build the HTML table
      //       txt += `<table class='table' style='width:50%' border='1'>
      // <tr><th>Name</th><th>City</th></tr>`;
      //       rows.forEach((row) => {
      //         txt += `<tr><td style='text align:right'>${row.name}
      // </td><td>${row.city}</td></tr>`;
      //       });
      //       txt += "</table></html></body>";
      //       res.write(txt);
      //       res.end();
    });
  } else {
    return res.end("404 Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
