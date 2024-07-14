const express = require('express');
const path = require('path');
const app = express();
const port = 80;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청을 React 앱의 진입점인 index.html로 리디렉션
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
