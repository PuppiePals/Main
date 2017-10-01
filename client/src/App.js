import React, { Component } from 'react';
import './App.css';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
import CreatedDogProfilePage from './pages/createdogprofile';
import SearchResultsPage from './pages/searchresultspage';




class App extends Component {
  render() {
    return (
        <div className="App">
          <LoginPage />
          <HomePage />
          <PlayMateDescriptionPage />
          <CreatedDogProfilePage />
          <SearchResultsPage />
        </div>
    );
  }
}

export default App;
