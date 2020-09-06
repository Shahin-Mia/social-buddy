import React, { useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';
import Header from './component/Header/Header';

export const PhotoContext = createContext();

function App() {

  const [picture, setPicture] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then(res => res.json())
      .then(data => setPicture(data.results))
  }, []);

  const profilePic = picture.map(i => i.picture.medium);
  return (
    <>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/post/:postId">
            <PhotoContext.Provider value={profilePic}>
              <PostDetails></PostDetails>
            </PhotoContext.Provider>
          </Route>
          <Route exact path="/">
            <Post></Post>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
