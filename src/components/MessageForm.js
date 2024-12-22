import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/messages', { user, message });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='User'
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder='Message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default MessageForm;
