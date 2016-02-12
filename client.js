// NOTE: the port is different
var host = "127.0.0.1", port = 6152;

var dgram = require( "dgram" );

var client = dgram.createSocket( "udp4" );

client.on( "message", function( msg, rinfo ) {
    console.log( "The packet came back with: " + msg );
});

// client listens on a port as well in order to receive ping
client.bind( port );

// proper message sending
// NOTE: the host/port pair points at server
var message = new Buffer( "My KungFu is even better than yours!" );
client.send(message, 0, message.length, 6666, "104.131.179.31" );