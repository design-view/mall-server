//common js문법
let http = require('http');
//내컴퓨터를 가르킴 127.0.0.1
let hostname = '127.0.0.1';
//포트번호 지정
let port = 8080;
//서버만들기
const server = http.createServer(function (req, res) {
    console.log('REQUEST:', req);
    const path = req.url;
    const method = req.method;
    if (path === '/products') {
        if (method === 'GET') {
            //헤드에 적음 200/content-type지정
            //응답을 보낼때 json형식의 응답을 보내겠다.
            res.writeHead(200, { 'Content-Type': 'application/json' });
            //객체배열을 스트링타입으로 변경 stringify
            const products = JSON.stringify([{
                name: '농구공',
                price: 5000,
            },]);
            //end의 첫번째 매개변수에는 스트링 타입이 담겨야함
            res.end(products);
        } else {
            res.end('생성되었습니다.');
        }
    }
    //반환
    res.end("<h1>Hello Client!</h1>");
});

//기다림 대기....
server.listen(port, hostname);
console.log('server on!');
