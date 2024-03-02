const express = require("express")

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

function customLogger(method, path, params, query, body) {
    console.log(" New Request Details: ", method, path, params, query, body)
}

app.use(function(req, res, next) {
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
    return res.send(arrayDB)
})

app.get("/superhero/:name", function (req, res) {
    const name = req.params.name
    console.log("---------- ", name)

    let obj1 = {}

    arrayDB.map(function (hero) {
        if (hero.name === name) {
            obj1 = hero
        }
    })

    return res.send(obj1)
})

app.post("/superhero", function (req, res) {
    console.log("---- req body ---- ", req.body)
    arrayDB.push(req.body)
    res.send("Superhero successfully created.")
})



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

app.listen(3000, function () {
    console.log("--- server is running on port number: 3000 ---")
})