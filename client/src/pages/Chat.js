import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { text: userMessage, user: 'User' }]);
    setUserMessage('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci/completions',
        {
          prompt: `The following is a conversation between a user and an AI assistant specialized in providing information about lab results and medical conditions.\n\nUser: ${userMessage}\nAssistant:`,
          max_tokens: 150,
          n: 1,
          stop: "\n",
          temperature: 0.3,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      const assistantMessage = response.data.choices[0].text.trim();
      setMessages((prevMessages) => [...prevMessages, { text: assistantMessage, user: 'Assistant' }]);
    } catch (error) {
      console.error('Error fetching ChatGPT response:', error);
    }
  };





  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-12 mb-6">Chat with ChatGPT</h1>
      <div className="border rounded p-4 w-full sm:w-1/2">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.user === 'User' ? 'text-right' : ''}`}>
            <span className="font-bold">{message.user}: </span>
            {message.text}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="border rounded p-2 flex-grow mr-2"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
