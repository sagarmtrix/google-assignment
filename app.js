import { Script } from 'vm';

let express = require('express');
let app = express();


app.get('/serverInfo', function(req, res) {
    res.send('This is Sagars\'s Server');
    res.status(200);
})

app.post('/info', function(req, res) {
    if (req.body) {
        console.log(req.body);
        res.send('form submitted');
    }
})

app.listen(3000);
