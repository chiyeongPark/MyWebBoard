//express 모듈
const express = require('express');
//path 모듈
const path = require('path');

//서버 생성
const app = express();
//포트 설정
const PORT = Number(process.env.PORT) || 3000;

app.get('/', (req,res) => {
    res.status(200);
    res.send('MyWebBoard');
});

//서버 실행
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port:${PORT}`);
});