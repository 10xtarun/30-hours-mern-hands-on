import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import Trial from './components/trial';
import Gallery from './components/Gallery';

function App() {
  var [value, setValue] = useState();

  function callConsole() {
    console.log(" exact value : ", value)

  }

  function handleOnChange(event) {
    setValue(event.target.value)
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
            <label for="formInputImage" className="form-label">Add Your Image</label>
            <input type="file" className="form-control" id="formInputImage" placeholder="Upload your image here" />
          </div>
          <div className="mb-3">
            <label for="forInputCaption" className="form-label">Your Image Caption</label>
            <input type="text" className="form-control" id="forInputCaption" placeholder="Write your image caption" onChange={handleOnChange} />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={callConsole}>Submit</button>
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
