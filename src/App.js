import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
// import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';
import MovieTitle from './components/home/MovieTitle';

const App = () => {

    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            {/* <Footer /> */}
          </div>
        </Router>
      </Provider>
    );
  
}

export default App;


// import React from 'react'

// export const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }
