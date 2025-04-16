import React from "react";
import Summarizer from "../components/Summarizer";

const HomePage = () => (
    <div className="container">
        <h1>Welcome to the Summarizer App</h1>
        <p>Enter your text below, and the app will generate a concise summary for you.</p>
        <Summarizer />
    </div>
);

export default HomePage;
