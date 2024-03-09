import React, { useState } from "react"
import axios from "axios"

function Gallery() {

    const [heroes, setHeroes] = useState([])

    // const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    const fetchSuperHeroes = () => {
        axios.get("http://localhost:8000/superhero")
        .then(function(response) {
            console.log("--------------- ", response.status, response.statusText, response.data)
            // return response.json()
            setHeroes(response.data)
        })
        .catch(function(error){
            alert(error.message)
        })
    }

    return (
        <div className="container mb-3 pb-3">
            <h3 className="text-muted">View Your Gallery</h3>
            <button onClick={fetchSuperHeroes}>Fetch</button>
            {/* justify-content-md-center */}
            <div className="row row-cols-3 g-3">

                {
                    heroes.map(function (heroElement, index) {
                        console.log("-----HERO ------ ", heroElement)
                        return (
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={"http://localhost:8000/images/" + heroElement.imageUrl} className="card-img-top" style={{ height: "10rem" }} alt={heroElement.alterName} />
                                <div className="card-body">
                                    <h5 className="card-title">Alter Ego: {heroElement.alterName}</h5>
                                    <p className="card-text"></p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Name: {heroElement.name}</li>
                                    <li className="list-group-item">Age: 32</li>
                                    <li className="list-group-item">Height: 180</li>
                                </ul>
                                {/* <div className="card-body">
                                    <a href="#" className="card-link">Card link</a>
                                    <a href="#" className="card-link">Another link</a>
                                </div> */}
                            </div>
                        </div>)
                    })
                }


            </div>
            {/* <h2>View Your Gallery Here</h2>

            <img src="http://localhost:8000/images/1709964141102-batman.jpeg" className="img-thumbnail" alt="Batman"></img> */}
        </div>
    )
}

export default Gallery