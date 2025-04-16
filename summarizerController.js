import { openai } from "../config/openaiConfig.js";

export const summarizeText = async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text is required for summarization." });
    }

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "Summarize the following text:" },
                { role: "user", content: text }
            ],
            max_tokens: 150,
        });

        const summary = response.choices[0].message.content.trim();
        res.json({ summary });
    } catch (error) {
        console.error("Error generating summary:", error.message);
        res.status(500).json({ error: "Failed to generate summary." });
    }
};
