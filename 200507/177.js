"use strict";

const http = require('http');
const qs = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'POST':
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const obj = qs.parse(body);
            res.writehead(200);
            res.end(JSON.stringify(obj));
        });
        req.on('error', (err) => {
            console.error(err.stack);
        });
        break;
        default:
            res.end();
    }
    
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//http://localhost:3000
/*
웹 브라우저에서 주소를 호출하는 방법은 get 메소드 api만 가능
post 메소드로 작성된 api를 확인하려면 별도로 앱을 다운받아 확인 가능
*/