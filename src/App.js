import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //by default light mode
  const [alert, setAlert] = useState(null);

  // It's for showing alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1650);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils";
    }
  };
  const toggleModeB = () => {
    if (mode === "light") {
      setMode("primary");
      document.body.style.backgroundColor = "#0e324b";
      showAlert("Blue mode has been enabled!", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        toggleModeB={toggleModeB}
      />
      {/* <div className="row">
        <div className="col-2">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div> */}
      <div className="d-flex">
        <div className="p-2">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="p-2 flex-grow-1 m-3">
          <Alert alert={alert} />
        </div>
      </div>
      <div className="container my-3">
        <TextForm
          mode={mode}
          showAlert={showAlert}
          heading="Enter the text to Analyse"
        />
      </div>
    </>
  );
}

export default App;
