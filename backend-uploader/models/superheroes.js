const mongoose = require("mongoose")

const superheroSchema = new mongoose.Schema(
    {
        name: {
            type: "string",
            unique: true,
            required: true
        },
        alterName: {
            type: "string",
            unique: true,
            required: true
        },
        imageUrl: {
            type: "string",
            required: true
        } ,
        anotherName: {
            type: "string"
        },
        height: {
            type: "number"
        },
        isActive: {
            type: "boolean"
        }
    }
)

module.exports = mongoose.model("superheroes", superheroSchema)

