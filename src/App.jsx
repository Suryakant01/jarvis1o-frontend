import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Import the CSS file

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Jarvis. Ask me anything about Suryakant.", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { text: inputValue, sender: "user" };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use environment variable for the backend URL
      // In development, this will be 'http://localhost:5001' from .env
      // In production, Vite will replace this with the value from your build environment
      const API_BASE_URL = import.meta.env.VITE_APP_API_URL;
      if (!API_BASE_URL) {
        throw new Error('API base URL is not defined. Please check your environment variables.');
      }
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessage = { text: data.answer, sender: "bot" };
      setMessages(prevMessages => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Failed to fetch bot's response:", error);
      const errorMessage = { text: "Sorry, something went wrong. Please try again.", sender: "bot" };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Jarvis1o</h2>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <span className="typing-indicator"></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask a question about Suryakant..."
          aria-label="Ask a question about Suryakant"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </div>
  );
}

export default App;