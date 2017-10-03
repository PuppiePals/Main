import React, { Component } from 'react';
import './App.css';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
import CreatedDogProfilePage from './pages/createdogprofile';
import SearchResultsPage from './pages/searchresultspage';
import Nav from './components/Navbar';
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />        
          <LoginPage />
          <HomePage />
          <PlayMateDescriptionPage />
          <CreatedDogProfilePage />
          <SearchResultsPage />
          <Footer />
        </div>
    );
  }
}

export default App;
