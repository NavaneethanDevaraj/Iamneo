const crypto = require("crypto");
const requestBodyparser = require("../util/bodyParser");
const writeToFile = require("../util/writeToFile");
module.exports = async (req, res) => {
  if (req.url === "/api/employees") {
    try {
      let body = await requestBodyparser(req);
      body.id = crypto.randomUUID();
      req.employees.push(body);
      writeToFile(req.employees);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end();
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation Failed",
          message: "Request body is not valid",
        })
      );
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};