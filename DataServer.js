var host = "127.0.0.1", port1 = 33333;
var host1 = "127.0.0.1", port2= 6666;
var globalData = "";
var client1   = require('dgram').createSocket('udp4');
var client2   = require('dgram').createSocket('udp4');


client1.on( "message", function( msg, rinfo ) {
    console.log( rinfo.address + ':' + rinfo.port + " - You data is saved in a variable.");
    globalData = msg;
    client1.send( msg, 0, msg.length, rinfo.port, rinfo.address ); // added missing bracket
});

client2.on( "message", function( msg, rinfo ) {
    console.log( rinfo.address + ':' + rinfo.port + " - Send data back to Unity");
    client2.send( msg, 0, msg.length, rinfo.port, rinfo.address ); // added missing bracket
});


// server.bind( port );
client1.bind( port1 );
client2.bind( port2 );