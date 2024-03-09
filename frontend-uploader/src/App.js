import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Trial from './components/trial';
import Gallery from './components/Gallery';
import axios from "axios"

function App() {
  var [alterName, setAlterName] = useState("");
  var [name, setName] = useState("");
  var [imageFile, setImageFile] = useState(null);

  function handleOnChangeForAlterName(event) {
    setAlterName(event.target.value)
  }

  function handleOnChangeForName(event) {
    setName(event.target.value)
  }

  function handleOnChangeForImage(event) {
    setImageFile(event.target.files[0])
  }

  function handleOnSubmit(event) {
    event.preventDefault()


    const data = new FormData()
    data.append("name", name)
    data.append("alterName", alterName)
    data.append("myimage", imageFile)

    axios.post("http://localhost:8000/superhero", data, { headers: "multipart/form-data" })
      .then(function (response) {
        console.log("------- ", response.data)
        alert(data)
      })
      .catch(function (error) {
        console.log("xxxxxxxxxxx ", error)
        alert(error)
      })
  }

  return (
    <div>
      <header className="border">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Image Gallery</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Upload</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">View</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <form className="m-3 p-3">
          <div className="mb-3">
            <label for="formInputImage" className="form-label">Add Your Superhero Image</label>
            <input type="file" className="form-control" id="formInputImage" placeholder="Upload your image here" onChange={handleOnChangeForImage}/>
          </div>
          <div className="mb-3">
            <label for="forAlterName" className="form-label">Alter Name</label>
            <input type="text" className="form-control" id="forAlterName" placeholder="...Batman" onChange={handleOnChangeForAlterName} />
          </div>
          <div className="mb-3">
            <label for="forName" className="form-label">Name</label>
            <input type="text" className="form-control" id="forName" placeholder="...Bruce Wayne" onChange={handleOnChangeForName} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={handleOnSubmit}>Submit</button>
          </div>
        </form>
      </main>

      {/* <Trial appValue={value} /> */}
      <Gallery />
      <footer className='mt-3'>
        <nav className="navbar fixed-bottom bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">We are media.</a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
