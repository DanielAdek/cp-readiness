import express from 'express';
// import path from 'path';

const app = express();
const router = express.Router();
const path = __dirname + '/views/';
console.log(path);

router.get((req, res, next)=> {
    console.log('/', req.method);
    next();
});

router.get('/', (req, res)=> {
    res.sendFile(path + 'index.html');
});

router.get('/about', (req, res)=> {
    res.sendFile(path + "about.html");
});

router.get('/contact', (req, res)=> {
    res.sendFile(path + "contact.html");
});

app.use("/",router);

app.get('*', (req, res)=> {
    res.sendFile(path + "404.html");
});

app.listen(3000, (err)=> {
    err ? console.log(err.message) :
    console.log("Live at Port 3000");
});