let http = require('http');

//create a server object:
http.createServer((req, res) => {
    const words = ["SUMMER", "WINTER", "AUTUMN", "SPRING"];

    let word = words[Math.floor(Math.random() * words.length)];
    let seasonValue = {season: word};
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(seasonValue)); //write a response to the client
    res.end(); //end the response
}).listen(8888); //the server object listens on port 8888