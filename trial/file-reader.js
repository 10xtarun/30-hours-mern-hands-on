var fs = require("fs/promises")

// fs.readFile("sample.txt", function (error, data) {
//     // data
//     console.log("Error: ", error)
//     console.log("Output: ", data.toString())
// })

fs.readFile("sample.txt")
.then(function(data) {
    console.log("Output: ", data.toString())
})
.catch(function(error) {
    console.log("Error: ", error)
})