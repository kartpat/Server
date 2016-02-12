var dgram = require("dgram");

var server = dgram.createSocket("udp4");


server.on("error", function (err) {
  console.log("server error:\n" + err.stack);
  server.close();
});

server.on("message", function (msg, rinfo) {
  // console.log("server got: " + "msg" + " from " +
    // rinfo.address + ":" + rinfo.port);
  // var buffer = new Buffer(msg);
  console.log(" "+msg+" ");
    // sendUDPdata(msg, rinfo);
});

server.on("listening", function () {
  var address = server.address();
  console.log("server listening " +
      address.address + ":" + address.port);
});

server.bind(6152);
// server listening 0.0.0.0:41234