import React from 'react';
import './Note.css';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const Note = ({ title, content, category, onEdit, onDelete }) => {
  return (
    <Card className="note-card" variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {content}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Category:</strong> {category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onEdit}>Edit</Button>
        <Button size="small" color="secondary" onClick={onDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Note;
