import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import {BrowserRouter, Match, Miss} from 'react-router';

import './css/style.css'

// Statless functional component
const Root = () => {
  return(
    // Wrap the entire router with '<br owserrouter>'
    <BrowserRouter>
      <div>
        {/* If one match is pattern '/', show component 'StorePicker'
        Match allows you to show components in the specified path
        */}
        <Match exactly pattern='/' component={StorePicker} />
        <Match pattern='/store/:storeId' component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render(<Root />, document.querySelector('#main'));
