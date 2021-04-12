require("dotenv").config()
const {MONGODBURI} = process.env
const mongoose = require("mongoose")
const config = {useNewUrlParser: true, useUnifiedTopology: true}

//////////////////////////
//CONNECT TO MONGO
//////////////////////////
mongoose.connect(MONGODBURI, config)

//////////////////////////
//EVENTS to know we are connected
//////////////////////////
mongoose.connection
    .on("open", () => 
        console.log ("You are connected to MONGO"))
    .on("close", () => 
        console.log ("You are disconnected to MONGO"))
    .on("error", () => 
        console.error())

module.exports = mongoose
