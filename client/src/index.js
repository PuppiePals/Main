import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import PlayMateDescriptionPage from './pages/detailedplaymatedescription';
import CreatedDogProfilePage from './pages/createdogprofile';

ReactDOM.render(<CreatedDogProfilePage />, document.getElementById('root'));
