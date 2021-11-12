import * as React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import env from '../env.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Error from './Error';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ariaLabel = { 'aria-label': 'description' };

export default function Note() {
  let {noteURL} = useParams();
  const [noteText, setNoteText] = useState('');
  const [lineClass, setLineClass] = useState('hide'); 
  const [formClass, setFormClass] = useState('hide');
  const [errorClass, setErrorClass] = useState('hide');

  useEffect(() => {
    if (noteURL !== undefined) {
      fetch(env.urlBack, {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({"url": noteURL})
      })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.result) { //true or false (записалось или нет)
          setNoteText(response.note);
          setLineClass('');
          setFormClass('hide');
          setErrorClass('hide');

        } else if (!response.result) {
          console.log(response);
          setLineClass('hide');
          setFormClass('hide');
          setErrorClass('');
        }
      })
    }
    else {
      setLineClass('hide');
      setFormClass('');
      setErrorClass('hide');
    }
  }, [noteURL]);

  function getNote(event) {
    event.preventDefault();
    let url = event.target.elements.url.value;
    url = url.trim();
    if (url === '') {
      alert('Please, add notes');
      return false;
    }
    noteURL = url;
    window.location.href = env.url+'/'+url; //перенаправили на нужный нам note
  }

  function searchNote() {
    window.location.href = env.url;
  }

    return (
      <div className="main_block">
        <div className={lineClass} >
          <form className="note_form">
          <h4>Note:</h4>
          <Box className="note_box_text">
              <Card variant="outlined" className="note_text">{noteText}</Card>
          </Box>
          <button onClick={searchNote} className="note_form_button">Find another note</button>
          </form>
        </div>
        <div className={errorClass}>
          <Error/>
          <a href="/note"><button className="note_button_error">Back to note</button></a>
        </div>
        <div className={formClass}>
          <form action="" onSubmit={getNote} className="note_form">
            <Box
               sx={{
                 '& .MuiTextField-root': { margin: '0 0 10px ', width: '100%' },
               }}
            >
                <div>
                  <TextField
                      id="url"
                      label="Enter the hash of the note"
                      type="text"
                      name="url"
                  />
                </div>
            </Box>
            <button type="submit" className="btn btn-primary note_form_button">Search Note</button>
          </form>
        </div>
      </div>
    );
  } 