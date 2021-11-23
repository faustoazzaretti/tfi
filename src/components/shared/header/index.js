import './style.css';
import React from 'react';

class Header extends React.Component {
    render() {
      return(
          <div>
              <div className="header">
                <div className="logo">Pc Picker</div>
                <div className="buttons">
                    <h3>Home</h3>
                    <h3>Settings</h3>
                    <h3>My profile</h3>
                </div>
                </div>
          </div>
      )    
    }
  }

export default Header;
