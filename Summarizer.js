import React, { useState } from "react";
import axios from "axios";

const Summarizer = () => {
    const [text, setText] = useState("");
    const [summary, setSummary] = useState("");
    const [error, setError] = useState("");

    const handleSummarize = async () => {
        if (!text.trim()) {
            setError("Please enter text to summarize.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/summarize", { text });
            setSummary(response.data.summary);
            setError("");
        } catch (err) {
            setError("Failed to generate summary. Try again later.");
        }
    };

    return (
        <div className="container mt-5">
            <h1>Text Summarizer</h1>
            <textarea
                rows="6"
                className="form-control"
                placeholder="Enter text to summarize..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary mt-3" onClick={handleSummarize}>
                Summarize
            </button>

            {error && <p className="text-danger mt-3">{error}</p>}
            {summary && (
                <div className="alert alert-success mt-3">
                    <h4>Summary:</h4>
                    <p>{summary}</p>
                </div>
            )}
        </div>
    );
};

export default Summarizer;
