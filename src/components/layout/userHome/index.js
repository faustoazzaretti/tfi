import React from 'react';
import Header from '../../shared/header/index';
import Aside from '../../shared/aside/index';
import Footer from '../../shared/footer/index';

class userHome extends React.Component {
    render() {
      return(
          <div>
              <Header />
              <Aside />
              <Footer />
          </div>
      )    
    }
  }

export default userHome;