import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messageEndRef = useRef(null);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box className="chatbox-container">
      <Box className="chatbox-header">
        <Typography variant="h6">Chat</Typography>
      </Box>
      <Box className="chatbox-body">
        {messages.map((message) => (
          <Paper key={message.id} className="chat-message" elevation={3}>
            <Typography>{message.text}</Typography>
          </Paper>
        ))}
        <div ref={messageEndRef} />
      </Box>
      <Box className="chatbox-footer">
        <IconButton color="primary">
          <AttachFileIcon />
        </IconButton>
        <IconButton color="primary">
          <EmojiEmotionsIcon />
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          fullWidth
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatBox;
