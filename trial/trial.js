

setTimeout(function() {
    console.log("first hello")

    setTimeout(function() {
        console.log("second hello")

        setTimeout(function() {
            console.log("third hello")
            
        }, 1000)
    }, 500)
}, 0)

// console.log("second hello")

