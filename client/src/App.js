import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
import CreateDogProfilePage from './pages/createdogprofile';
import SearchResults from './pages/searchresultspage';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import FormDog from './components/FormDog';
import FormParent from './components/FormParent';
import FormSearch from './components/FormSearch';
import SignUp from './components/SignUp'

const App = () =>
  <Router>
    <body>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/formdog" component={CreateDogProfilePage} />
        <Route exact path="/formparent" component={FormParent} />
        <Route exact path="/formsearch" component={FormSearch} />
        <Route exact path="/searchresults" component={SearchResults} />
        <Route exact path="/playmate" component={PlayMateDescriptionPage} />
        <Route exact path="/viewprofile" component={PlayMateDescriptionPage} />
      </Switch>
      <Footer />
    </div>
    </body>
  </Router>;

export default App;



