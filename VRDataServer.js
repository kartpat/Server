/*
This is a node.js script for receiving Colortizer data from CityScope Colortizer sketch.
It saves the data on PORT 33333 and sends a UDP packet to any client pinging PORT 6666.
Note: Needs work on setting the data back to zero after some time of inactivity. 10 seconds.
*/
var host = "127.0.0.1", port1 = 33333;
var host1 = "127.0.0.1", port2 = 6666;
var globalData = new Buffer("Some bytes");
var resMessage = new Buffer("Colortizer data received!");
var client1   = require('dgram').createSocket('udp4');
var client2   = require('dgram').createSocket('udp4');

// Client to receive colortizer data from CityScope table.
client1.on( "message", function( msg, rinfo ) {
    console.log( rinfo.address + ':' + rinfo.port + " - Storing Colortizer data...");
    globalData = msg;
    client1.send(resMessage, 0, resMessage.length, rinfo.port, rinfo.address);
});

//Client to send the colortizer data to all the clients pinging port 6666.
client2.on( "message", function( msg, rinfo ) {
    console.log( rinfo.address + ':' + rinfo.port + " - Sending data to Unity clients...");
    client2.send( globalData, 0, globalData.length, rinfo.port, rinfo.address ); // added missing bracket
});


// server.bind( port );
client1.bind( port1 );
client2.bind( port2 );