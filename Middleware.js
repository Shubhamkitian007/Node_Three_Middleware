const { response, request } = require("express");

const express = require("express");
const app = express();

// First Middleware Create

const FirstMiddleWare = (request, response, next)=>{
    console.log("First Middleware");
    next();
}

// Secong Middleware Create


const SecondMiddleWare = (request, response, next)=>{
    console.log('Secong MiddleWare');
    next();
}

// Use First Middleware
app.use(FirstMiddleWare);

// Use Second Middleware

app.use(SecondMiddleWare);

// Call first Middleware
app.get("/",FirstMiddleWare,(request, response)=>{
    response.send("First MiddleWare Send......")
})

// Call first Middleware
app.get("/user", FirstMiddleWare, (request, response)=>{
    response.send("User Page First Middleware");
})

// Call first Middleware
app.get("/student", FirstMiddleWare, (request, response)=>{
    response.send("Student Page First Middleware");
})

// Call Second Middleware
app.get("/teacher", (request, response)=>{
    response.send("teacher Page Second Middleware");
})

app.listen(5550);