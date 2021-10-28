import './style.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Aside extends React.Component {
    render() {
      return(
          <div className="aside">
              <div className="content">
                    Cotizar mi ordenador
                  </div>
                  <div className="content">
                    Cotizar un nuevo ordenador
                  </div>
              <div className="box">
                  
              </div>
          </div>
      )    
    }
  }

export default Aside;