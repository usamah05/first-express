const express = require('express');

const app = express();

// app.use((req, res) => {
//     console.log('we got requist')
//     res.send('<h1>Selamat, Anda Berhasil</h1>')
// });

app.get('/', (req, res) => {
    res.send('<h1>This is HOMEPAGE</h1>')
})

app.get('/blog', (req, res) => {
    res.send('<h1>This is page of BLOG</h1>')
})

// "/:judul" adalah root parameter (params). akses di browser dengan menuliskan http://localhost:8080/blog/berita-terkini
app.get('/blog/:judul', (req, res) => {
    const { judul } = req.params
    res.send(`ini adalah postingan denga judul: ${judul}`)
})



// lambang "?" setelah path dinamakan query string, dan berikut kode untuk mendapatkannya. akses di browser dengan menuliskan: localhost:8080/search?looking=apel
app.get('/search', (req, res) => {
    console.log(req.query)
    const { looking } = req.query
    res.send(`search keyword: ${looking}`)
})

app.get('/cats', (req, res) => {
    res.send('<h1>This is Cats page from get</h1>')
})

app.post('/cats', (req, res) => {
    res.send({"message" : "This is Cats's page from post"})
})

app.get('/about', (req, res) => {
    res.send('<h1>Page of about is here</h1>')
})

// app.get('*', (req, res) => {
//     res.send('<h1>Sorry! This page is not Exist</h1>')
// })

app.listen(8080, () => {
    console.log('local host is running on http://localhost:8080');
});