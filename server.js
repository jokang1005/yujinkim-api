///////////////////////////
//IMPORT DEPENDENCIES//
///////////////////////////
//1. import environmental variables 
require("dotenv").config()
//////and then destructure all the enviornmental variables
const {PORT, NODE_ENV} = process.env
//2. import other dependencies
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = require("./config/cors")

///////////////////////////
//SETUP MIDDLEWARE//
///////////////////////////
//1. first middleware should always be cors to prevent unauthorized access to server. look at npmjs.com and look at cors documentation. use config folder for misc type info.
app.use(NODE_ENV === "production" ? cors(corsOptions) : cors())
