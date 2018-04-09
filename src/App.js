import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom';
import routerList from './router/routerList'
import Header from './component/common/Header'
import Footer from './component/common/Footer'


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Header />
              <div className="cont">
                  {
                      routerList.map((item,index)=>{
                          return <Route exact path={item.path} key={index} component={item.component}></Route>
                      })
                  }
              </div>
              <Footer>
                  {
                      routerList.map((item,index)=>{
                          return <Link to={item.path} key={index}>{item.name}</Link>
                      })
                  }
              </Footer> 
          </div>
      </Router>
    );
  }
}

export default App;
