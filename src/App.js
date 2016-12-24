import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  textbox: {
    backgroundColor: '#ECECEC',
    margin: 10,
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          hintText="Your name"
          style={styles.textbox}
        /><br/>
        <TextField
          hintText="Contact form"
          style={styles.textbox}
          multiLine={true}
          rows={2}
        /><br/>
        <RaisedButton primary={true} label="Reply" />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
