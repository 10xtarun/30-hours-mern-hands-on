import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Trial from './components/trial';

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
      <header class="border">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Image Gallery</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Upload</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">View</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <form class="m-3 p-3">
          <div class="mb-3">
            <label for="formInputImage" class="form-label">Add Your Image</label>
            <input type="file" class="form-control" id="formInputImage" placeholder="Upload your image here" />
          </div>
          <div class="mb-3">
            <label for="forInputCaption" class="form-label">Your Image Caption</label>
            <input type="text" class="form-control" id="forInputCaption" placeholder="Write your image caption" onChange={handleOnChange} />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" onClick={callConsole}>Submit</button>
          </div>
        </form>
      </main>

        <Trial appValue={value} />
      <footer>
        <nav class="navbar fixed-bottom bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">We are media.</a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default App;
