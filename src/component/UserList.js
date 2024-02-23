import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    avatar: {
        width: 50,
        height: 50,
    },
});

const UserList = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        console.log('Fetching users...');
        axios.get('https://api.github.com/users')
            .then((res) => {
                console.log("resssss", res);
                setUsers(res.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                // Handle the error here, e.g., show an error message to the user
            });
    };
    console.log('Rendering UserList...');

    return (
        <>
            <List>
                {users.map((user) => (
                    <ListItem component={Link} to={`/users/${user.login}`} key={user.id} button>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar} src={user.avatar_url} alt={user.login} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography variant="h6">{user.login}</Typography>}
                            secondary={<Typography variant="body2">@{user.login}</Typography>}
                        />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default UserList;