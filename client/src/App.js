// import React, { Component } from 'react';
// import './App.css';
// import LoginPage from './pages/login';
// import HomePage from './pages/home';
// import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
// import CreatedDogProfilePage from './pages/createdogprofile';
// import SearchResultsPage from './pages/searchresultspage';
// import Nav from './components/Navbar';
// import Footer from './components/Footer'


// class App extends Component {
//   render() {
//     return (
//         <div className="App">
//           <Nav />        
//           <LoginPage />
//           <HomePage />
//           <PlayMateDescriptionPage />
//           <CreatedDogProfilePage />
//           <SearchResultsPage />
//           <Footer />
//         </div>
//     );
//   }
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
import CreatedDogProfilePage from './pages/createdogprofile';
import SearchResultsPage from './pages/searchresultspage';
import Nav from './components/Navbar';
import Footer from './components/Footer'

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/playmate" component={PlayMateDescriptionPage} />
        <Route exact path="/createdogprofile" component={CreatedDogProfilePage} />
        <Route exact path="/search" component={SearchResultsPage} />
      </Switch>
    </div>
  </Router>;

export default App;


