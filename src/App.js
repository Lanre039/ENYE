import React, { Component } from 'react';

import './App.css';
import UserForm from './components/UserForm/UserForm';


class App extends Component {
  render() {
    
    return (
      
      <div className="App">
        <UserForm />
        <div className="footer">
        <div className="copyright">
            <p>
                &copy; Copyright {new Date().getFullYear()}, Dainty Events. All Right Reserved.
                Designed By rajilateeflanre@gmail.com
            </p>
        </div>
        
    </div>
      </div>
    );
  }
}

export default App;