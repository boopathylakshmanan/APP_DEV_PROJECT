import React, { useState } from 'react';
import {
  Box, Typography, Avatar, Divider, Grid, Button, TextField, IconButton, List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import './Profile.css';

const Profile = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', avatar: '/static/images/avatar/1.jpg' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', avatar: '/static/images/avatar/2.jpg' },
  ]);
  const [newUser, setNewUser] = useState({ name: '', email: '', avatar: '' });

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { ...newUser, id: users.length + 1, avatar: '/static/images/avatar/default.jpg' }]);
      setNewUser({ name: '', email: '', avatar: '' });
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Box className="profile-container">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar alt="User Name" src="/static/images/avatar/1.jpg" className="profile-avatar" />
        </Grid>
        <Grid item xs>
          <Typography variant="h5" className="profile-name">
            User Name
          </Typography>
          <Typography variant="body1" className="profile-email">
            user.email@example.com
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        About
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        Phone: +123456789
      </Typography>
      <Typography variant="body1" paragraph>
        Address: 123 Main St, Anytown, USA
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" gutterBottom>
        Manage Users
      </Typography>
      <Box sx={{ my: 2 }}>
        <TextField
          label="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          sx={{ mr: 2 }}
        />
        <IconButton color="primary" onClick={handleAddUser}>
          <AddIcon />
        </IconButton>
      </Box>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteUser(user.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Button variant="contained" color="primary">
        Edit Profile
      </Button>
    </Box>
  );
};

export default Profile;
