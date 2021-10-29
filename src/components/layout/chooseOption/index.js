import './style.css';
import React from 'react';
import Header from '../../shared/header/index';
import Footer from '../../shared/footer/index';
import {Button} from '@mui/material';

class chooseOption extends React.Component {
    render() {
      return(
          <div>
              <Header />
              <div className="chooseText">
                    <div className="text">Elegi un procesador</div>
                    <div className="buttons">
                        <Button variant="contained" size="medium">Next</Button>
                        <Button variant="contained" size="medium">Back</Button>
                    </div>
              </div>
              <div className="option">
                <div className="product">
                    <img src="https://pbs.twimg.com/profile_images/1295739630197800963/AJQ9XqLN_400x400.jpg"/>
                </div>
                <div className="product">
                <img src="https://s3-symbol-logo.tradingview.com/intel--600.png"/>
                </div>
              </div>
              <Footer />
          </div>
      )    
    }
  }

export default chooseOption;