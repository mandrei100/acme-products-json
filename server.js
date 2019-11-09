const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/products', (req, res, next)=> {
    db.findAll()
    .then(data => Response.send(data))
    .catch(e => console.log('get products error', el));
  //  res.send(products);
});

app.listen(3000, ()=> console.log('listening on port 3000'));