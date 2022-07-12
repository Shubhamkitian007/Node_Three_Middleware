const { response, request } = require("express");

const express = require("express");
const app = express();

const FirstMiddleWare = (request, response, next)=>{
    console.log("First Middleware");
    next();
}

const SecondMiddleWare = (request, response, next)=>{
    console.log('Secong MiddleWare');
    next();
}

app.use(FirstMiddleWare);
app.use(SecondMiddleWare);

app.get("/",FirstMiddleWare,(request, response)=>{
    response.send("First MiddleWare Send......")
})

app.get("/user", FirstMiddleWare, (request, response)=>{
    response.send("User Page First Middleware");
})

app.get("/student", FirstMiddleWare, (request, response)=>{
    response.send("Student Page First Middleware");
})

app.get("/teacher", (request, response)=>{
    response.send("teacher Page Second Middleware");
})

app.listen(5550)