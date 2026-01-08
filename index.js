const express = require ('express');
const path = require ('path');
const app = express();
const port = 9090;

//servefiles to the public 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/core',express.static(path.join(__dirname, 'core')));

app.use('/config',express.static(path.join(__dirname, 'config')));

app.use('/receipts',express.static(path.join(__dirname, 'receipts')));

//route
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.listen (port,() => {
    console.log(`listening on port ${port} now`)
})