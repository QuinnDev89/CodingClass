const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var request = require('request');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});



app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000');
})


app.get('/getExercises', (req, res) => {
        fs.readFile("nfs/ejercicios.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        res.json(JSON.parse(jsonString))
        });
})

app.get('/getCodes', (req, res) => {
    fs.readFile("nfs/codigos.txt", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.send(jsonString)
    });
})

app.get('/getUsuarios', (req, res) => {
    fs.readFile("nfs/usuarios.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.json(JSON.parse(jsonString))
    });
})

app.get('/getBlogs', (req, res) => {
    fs.readFile("nfs/blog.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.json(JSON.parse(jsonString))
    });
})

app.post('/addUser', (req, res) => {
    if (!fs.existsSync('nfs/usuarios.json')) {
        //create new file if not exist
        fs.closeSync(fs.openSync('nfs/usuarios.json', 'w'));
    }
    const file = fs.readFileSync('nfs/usuarios.json')
;
    if(file.length == 0){
        fs.writeFileSync('nfs/usuarios.json', JSON.stringify([req.body]))
    }else {
         //append data to jso file
        const json = JSON.parse(file.toString())
        //add json element to json object
        console.log(json)
        json.push(req.body)
        console.log(json)
        fs.writeFileSync('nfs/usuarios.json', JSON.stringify(json))
    }
})

app.post('/addBlog', (req, res) => {
    if (!fs.existsSync('nfs/blog.json')) {
        //create new file if not exist
        fs.closeSync(fs.openSync('nfs/blog.json', 'w'));
    }
    const file = fs.readFileSync('nfs/blog.json')
;
    if(file.length == 0){
        fs.writeFileSync('nfs/blog.json', JSON.stringify([req.body]))
    }else {
         //append data to jso file
        const json = JSON.parse(file.toString())
        //add json element to json object
        console.log(json)
        json.push(req.body)
        console.log(json)
        fs.writeFileSync('nfs/blog.json', JSON.stringify(json))
    }
    
})



app.post('/addCode', (req, res) => {
    aux = ''
    var program = {
        script : req.body.codigo,
        language: "python3",
        versionIndex: "4",
        clientId: "f0b1b462a4daeed773b483112c72cf62",
        clientSecret:"79a4daeeffe414d0a2830f81a389f2012a99659c1f8923da605e41d73675f0f2"
    };

    const codigo = JSON.stringify(req.body)
    console.log(req.body.codigo)
    fs.appendFile('nfs/codigos.txt',codigo, (err) => {
        console.log("Codigo añadido")
        request({
            url: 'https://api.jdoodle.com/v1/execute',
            method: "POST",
            json: program
        },
        function (error, response, body) {
            aux=body.output
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.send(JSON.stringify(aux))
        })
    })
    
})
