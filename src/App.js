import React, { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';

export const PhotoContext = createContext();

function App() {

  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then(res => res.json())
      .then(data => setPicture(data.results))
  }, []);

  const picture2 = picture.map(i => i.picture.medium);
  return (
    <Router>
      <Switch>
        <Route path="/post/:postId">
          <PhotoContext.Provider value={picture2}>
            <PostDetails></PostDetails>
          </PhotoContext.Provider>
        </Route>
        <Route exact path="/">
          <Post></Post>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
