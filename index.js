var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 3000 });

wss.broadcast = function broadcast(s,message){
	wss.clients.forEach(function each(client){
		client.send(message)
	})
}

wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
    	wss.broadcast(1,message);
        //ws.send(message)
    });
    
});
