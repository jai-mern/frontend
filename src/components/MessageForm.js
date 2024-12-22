import React, { useState } from 'react';
import axios from 'axios';
import './MessageForm.css'; // Import the CSS file for styling

const MessageForm = () => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/messages', { user, message });
      alert('Message sent successfully!');
      setUser(''); // Clear input after submission
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className='form-container'>
      <h2>Send a Message</h2>
      <form className='message-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter your name'
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder='Type your message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default MessageForm;
