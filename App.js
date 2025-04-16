import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Summarizer from "./components/Summarizer.js"; 

function App() {
    return (
        <div className="App">
            <h1>Welcome to the Summarizer App</h1>
            <Summarizer /> {/* Add the Summarizer component here */}
        </div>
    );
}

export default App;
