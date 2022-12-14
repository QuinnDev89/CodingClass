const fs = require('fs');
const express = require('express');
const app = express();



app.get('/registerUser', (req, res) => {
    res.json({
            "status": "success",
            "statusMessage": "User Registered Successfully"
    });
})

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000');
})


app.get('/getExercises', (req, res) => {
        fs.readFile("nfs/usuarios.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        res.json(JSON.parse(jsonString))
        });
})

app.get('/getCodes', (req, res) => {
    fs.readFile("nfs/usuarios.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.json(JSON.parse(jsonString))
    });
})

app.get('/getBlogs', (req, res) => {
    fs.readFile("nfs/usuarios.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    res.json(JSON.parse(jsonString))
    });
})

fs.writeFile('nfs/usuario.txt','Prueba para nfs', (error) =>{
    if(error){
        console.log(`Error: ${error}`);
    }
})