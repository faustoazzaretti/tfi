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
              <div className="container">
                <div className="chooseText">
                      <div className="text">Pick cpu model</div>
                </div>
                  <div className="option">
                    <div className="table">
                      <h4>Pc Spects: INTEL</h4>
                      <h4>Cpu:</h4>
                      <h4>Motherboard:</h4>
                      <h4>Ram:</h4>
                      <h4>Graphic Card:</h4>
                      <h4>Storage:</h4>
                      <h4>Box:</h4>
                    </div>
                  <div className="products">
                    <div className="product">
                          <img src="https://mla-s1-p.mlstatic.com/777629-MLA43406873119_092020-F.jpg"/>
                      </div>
                      <div className="product">
                      <img src="https://www.deffo.com.ar/wp-content/uploads/2020/09/Core-i9-10th-unlock-9.jpg"/>
                      </div>
                    </div>
                  </div>
              </div>
              <Footer />
          </div>
      )    
    }
  }

export default chooseOption;