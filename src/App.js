import './App.css';
import Header from './components/Header'
import TextFrom from './components/TextForm'
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  let [alert, setAlert] = useState({});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert({})
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled!", "success")
      document.title = "TextUtils - Light Mode"
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = "rgb(9 55 69)";
      showAlert(" Dark mode has been enabled!", "success")
      document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={< About mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextFrom heading={"Try TextUtils - Word counter, character Counter, Remove extra spaces"} mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
