const fetch = require('node-fetch');

async function fetchEmails() {
    const url = 'https://help.ssangyongsports.eu.org/help/api/rcron.php'; // 替換為你的 osTicket 郵件收集 URL
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

setInterval(fetchEmails, 10000); // 每 10 秒執行一次
