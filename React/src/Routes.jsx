import React from 'react';
import {Route, DefaultRoute} from 'react-router';

import App from './components/App.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Uploads from './components/Upload.jsx';
import Genres from './components/Genres.jsx';

export default (
      <Route path="/" component={App} >
         <Route path="main" component={Main}>
            <Route path="/main/uploads" component={Uploads} />
            <Route path="/main/genres" component={Genres} />
         </Route>
         <Route path="about" component={About} />
         <Route path="*" component={Main} />
      </Route>
);
