const express = require("express")
// const mongodb = require("mongodb")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const cors = require("cors")
const SuperHeroModel = require("./models/superheroes")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use(cors({
    origin: "http://localhost:3000"
}))


// MongoDB Connection
const MongoDBURI = "" // put your own URI with correct password and username
// const dbClient = new mongodb.MongoClient(MongoDBURI)

const dbClient = mongoose.connect(MongoDBURI, {})
    .then(function (data) {
        console.log("MongoDB Connection Established.")
        return data
    })
    .catch(function (error) {
        console.log("MongoDB Connection Failed.", error)
    })

// dbClient.on("connectionReady", function() {
//     console.log("MongoDB Connection Created.")
//     console.log(dbClient.db("metahumans").collections())
// })

function customLogger(method, path, params, query, body) {
    console.log(" New Request Details: ", method, path, params, query, body)
}

app.use(function (req, res, next) {
    customLogger(req.method, req.path, req.params, req.query, req.body)
    next()
})


let arrayDB = [
    {
        "name": "Bruce Wayne",
        "alterName": "Batman",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg"
    },
    {
        "name": "Steve Rogers",
        "alterName": "Captain America",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg"
    }
]

app.get("/", function (req, res) {
    return res.send("Greetings! Hello from backend server.")
})

app.get("/superhero", function (req, res) {
    return SuperHeroModel.find({})
    .then(function(data){
        return res.status(200).send(data)
    })
    .catch(function(error) {
        return res.status(400).send("Failed to fetch - " + error)
    })
})

app.get("/superhero/:name", function (req, res) {
    const alterName = req.params.name
    const heroes = dbClient.db("metahumans").collection("superheroes").findOne({ alterName: alterName })

    return heroes
        .then(function (data) {
            return res.send(data)
        })
})

// declare storage middleware

const uploader = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        }
    })
})

app.post("/superhero", uploader.single("myimage"), function (req, res) {

    console.log("------------------- ", req.body, req.file)
    const newSuperHero = {
        name: req.body.name,
        alterName: req.body.alterName,
        imageUrl: req.file.filename
    }
    return SuperHeroModel.create(newSuperHero)
        .then(function (data) {
            return res.send("Successfully create a new superhero.")
        })
        .catch(function (error) {
            return res.status(400).send("Failed to create a new superhero - " + error)
        })

})
/**function (req, res) {
    // console.log("---- req body ---- ", req.body)
    // arrayDB.push(req.body)

    // const insertOperation = dbClient.db("metahumans").collection("superheroes").insertOne(req.body)
    // return insertOperation
    // .then(function(data){
    //     return res.send("Superhero successfully created." + data.acknowledged)
    // })

    SuperHeroModel.create(req.body)
        .then(function (data) {
            return res.send(data)
        })
        .catch(function (error) {
            return res.send(error)
        })

})
*/



app.put("/superhero/:alterName", function (req, res) {
    const alterName = req.params.alterName
    const name = req.body.name

    const index = arrayDB.findIndex(function (elementObj) {
        return elementObj.alterName === alterName
    })

    console.log(" ---- index ---- ", index, " --- ", alterName)

    if (index !== -1 && name != undefined) {
        arrayDB[index].name = name
    }

    return res.send("Object updated successfully.")
})

app.delete("/superhero", function (req, res) {
    arrayDB = []
    res.send("All superheroes deleted successfully.")
})

app.listen(8000, function () {
    console.log("--- server is running on port number: 8000 ---")
})