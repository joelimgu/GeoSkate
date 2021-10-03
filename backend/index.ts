import express from "express";
import {Email,Name,Password,Id,Image,authToken} from "./Src/Definitions/Types";
import Comment from "./Src/Definitions/Interfaces/Comment";
import Coordinates from "./Src/Definitions/Interfaces/Coordinates";
import LocationInfo from "./Src/Definitions/Interfaces/LocationInfo";
import LocationInfoShort from "./Src/Definitions/Interfaces/LocationInfoShort";

const app = express();

// Pattern matching ID for request instead of creating one for each ID
// req is js object
// Inside header info a propos
// Inside body content of request

// get locations
app.get('/hola',(req,res)=>{
  // const q = functioncall()
  res.send("qqq");
});

// get Comments
app.get('/hola',(req,res)=>{
  // const q = functioncall()
  res.send("qqq");
});

//get images
app.get('/hola',(req,res)=>{
  // const q = functioncall()
  res.send("qqq");
});


// post register
app.post('/getLocations',(req,res)=>{
  res.send('Hello World!');
});

// post log in
app.post('/getLocations',(req,res)=>{
  res.send('Hello World!');
});

const port = 3000;

app.listen(port, ()=>console.log("Listening"))


/**
// GET
function getLocations(coordinates : Coordinates , radius : number) : Array<LocationInfo>{};

function getComments(idLocation : Id, page : number) : Array<Comment>{};

function getImages(idLocation : Id) : Array<Image>{};


// POST

function register(name : Name, email : Email, password : Password) : boolean{};

function login(email : Email, password : Password) : authToken{};*/
