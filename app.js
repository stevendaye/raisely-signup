import express from "express";
import http from "http";
import path from "path";

const app = express();
const server = http.createServer(app);
const port = normalizePort(process.env.PORT || 3000);

app.set("port", port);

process.on("uncaughtException", err => {
    console.log(`Raisely Signup Server Crashed: ${err.stack || err}`);
});
process.on("unhandledRejection", (reason, p) => {
    console.log(`Unhandled Promise Rejection: ${util.inspect(p)} \n Reason: ${reason}`);
});

// Prepare server static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

server.listen(port);
server.on("error", onError);
server.on("listening", onListen);

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "String" ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case "EACESS":
      console.log(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.log(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListen() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `Pipe ${addr}` : `${addr.port}`
  console.log(`Raisely Signup Server listening at http://localhost:${bind}`);
}
