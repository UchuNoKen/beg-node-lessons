const WS = new WebSocket('ws://localhost:9000');

WS.onmessage = (payload) => {

    displayMessages(payload.data);
    // console.log(payload.data);
};

WS.onopen = () => {

    displayTitle('Connected to Server');
    console.log('CONNECTION OPEN');
};

WS.onclose = () => {
    displayTitle('Disconnected from Server');
    console.log('Connection closed');
}


function displayTitle(title){
    document.querySelector('h1').innerHTML = title;
}

function displayMessages(message){

    let h1 = document.createElement('h1');
    h1.innerText = message;
    document.querySelector('div.messages').appendChild(h1);
    
}

document.forms[0].onsubmit = () => {

    let input = document.getElementById('message');

    // console.log(input.value);

    WS.send(input.value);

};