// Navigation
import * as React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function Header() {
 
    return (
      <Box sx={{ flexGrow: 1 }} className="header_box">
      <AppBar position="static" className="header_appbar">
        <nav className="header_nav">
        <a href="/"><button className="header_button_logo"><h4>Notes<span className="header_span">Share</span></h4></button></a>
          <ul className="header_ul">
            <li><NavLink exact to="/" className="header_a header_home">Home</NavLink></li>
            <li><NavLink to="/note" className="header_a">Note</NavLink></li>
            <li><NavLink to="/create" className="header_a">Create</NavLink></li>
            <li><NavLink to="/about" className="header_a">About</NavLink></li>
          </ul>
        </nav>
      </AppBar>
    </Box>
    );
  }