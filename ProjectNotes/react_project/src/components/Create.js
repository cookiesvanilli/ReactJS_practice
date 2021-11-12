import * as React from 'react';
import { useState, useEffect } from 'react';
import env from '../env.json';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { CopyToClipboard } from "react-copy-to-clipboard";

 export default function Create() {
  const [url, setUrl] = useState('');
  const [lineClass, setLineClass] = useState('hide'); // hide url
  const [formClass, setFormClass] = useState('');
  const [value, setValue] = useState('');
  const [isCopied, setCopied] = useState(false);

  let sendData = (obj) => {
    setFormClass('hide');
    setLineClass('');

    fetch(env.urlBack, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(obj)
    })
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if (response.result) { //true or false (записалось или нет)
        setUrl(env.url+'/'+response.url);
      }
    })
  }

  let loadDataFromForm = (event) => {
    event.preventDefault();
    let note = event.target.elements.note.value;
    note = note.trim();
    if (note === '') {
      alert('Please, add notes');
      return false;
    }
    sendData({"note" : note});
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCopied]);
  
    return (
      <div className="main_block">
        <form onSubmit={loadDataFromForm} className={formClass}>
        <Box
               sx={{
                 '& .MuiTextField-root': { margin: '0 0 10px ', width: '300px' },
               }}
            >
                <div>
                  <TextField
                      id="note"
                      label="Add note"
                      type="text"
                      name="note"
                      defaultValue="New note"
                  />
                </div>
            </Box>
          <button type="submit" className="create_button">Create</button>
        </form>
        <div className={lineClass}>
          <div className="create_block_copy">
          <TextField
            className="create_url"
            contentEditable
            spellCheck={false}
            onFocus={(event) => event.target.select()}
            type="text"
            value={url}
            onChange={({ target: { value } }) => {
              setValue(value);
              setCopied(false);
            }}
          />
          <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
            <Button className="create_button_copy">{isCopied ? "Copied!" : "Copy Code"}</Button>
          </CopyToClipboard>
          </div>
          <div><button className="create_button" onClick={function(){window.location.reload()}}>Add new note</button></div>
        </div>
      </div>
    );
  } 