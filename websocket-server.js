const webSocketServer = require('ws').Server;
const WSS = new webSocketServer({port: 9000});

WSS.on('connection', (ws) => {

    ws.on('message', (message) => {

        if(message === 'close'){

            ws.close();
            
        }else {

            WSS.clients.forEach((client) => {
                client.send(message);
            });
    
            console.log(message);

        }

       
    });

    // console.log('We are connected');

});