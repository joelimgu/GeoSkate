"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var port = 3000;
app.listen(port, function () { return console.log("Listening"); });
// GET
function getLocations(coordinates, radius) { }
;
function getComments(idLocation, page) { }
;
function getImages(idLocation) { }
;
// POST
function register(name, email, password) { }
;
function login(email, password) { }
;
