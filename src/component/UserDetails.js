import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    };

    fetchUser();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{ display: 'flex', mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.avatar_url}
        alt={user.login}
      />
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          @{user.login}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {user.location}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {user.company}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserDetails;