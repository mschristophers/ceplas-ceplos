import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { IconButton } from '@material-ui/core';

function App() {
  // State doesn't require refresh, whereas a normal variable needs to.
  const [input, setInput] = useState(''); 
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // Run once when the app component loads
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    }); // Runs when there are changes in the database. It's a listener(?)
  }, [])

  useEffect(() => {
    // If [] is blank, code runs once when app component loads
    // const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));
  }, []) // condition
  
  const sendMessage = (event) => {
    // Codes to send a message 
    event.preventDefault(); // prevents refresh
  
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  // By default, forms refresh on submit, meaning inputted data will be removed.
  // disabled={!input} disables button when there is no input 
  return (
    <div className="App">
      <QuestionAnswerIcon className="topLogo" style={{ fontSize: 120 }}/>
      <h1>Hello Ceplosers! :)</h1>
      <h2>Hi there, {username}!</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
      {
        messages.map(({id, message}) => (
          // Do the other stuffs in Message.js
          // Keys are necessary so the server only fills in new inputs; it doesn't re-render the whole list
          <Message key={id} message={message} username={username}/> 
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
