const express = require ('express');
const path = require ('path');
const bodyParser = requie('bodyParser');
const app = express();
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req,res) =>{
    res.sendfile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/', (req,res) =>{
    console.log(req.body);
    //database work here
    res.send('successfully posted data')
})


app.listen(3000);
