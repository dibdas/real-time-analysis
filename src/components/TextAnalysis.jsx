import { useState, useEffect } from "react";
import "./TextAnalysis.css";
function TextAnalysis() {
  // Function to count unique words and characters (excluding spaces and punctuation)

  const [text, setText] = useState("");
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [replaceString, setReplaceString] = useState("");
  useEffect(() => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniqueWords = words ? new Set(words) : new Set();
    setUniqueWordCount(uniqueWords.size);

    const chars = text.replace(/[^\w]/g, "").length;
    setCharCount(chars);
  }, [text]);

  // Replace all occurrences of searchString with replaceString
  const handleReplace = () => {
    const updatedText = text.split(searchString).join(replaceString);
    setText(updatedText);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>Real-Time Text Analysis</h1>

        <textarea
          className="text-area"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="result-box">
          <p>
            <span className="bold">Unique Words:</span> {uniqueWordCount}
          </p>
          <p>
            <span className="bold">
              Character Count (Excluding Spaces and Punctuation):
            </span>{" "}
            {charCount}
          </p>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="String to search"
            className="input-field"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <input
            type="text"
            placeholder="Replacement string"
            className="input-field"
            value={replaceString}
            onChange={(e) => setReplaceString(e.target.value)}
          />
        </div>

        <button className="replace-button" onClick={handleReplace}>
          Replace All
        </button>
      </div>
    </div>
  );
}

export default TextAnalysis;
