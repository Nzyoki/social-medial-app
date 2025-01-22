import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // importing the router and link from react-router-dom
import './App.css';
import backgroundImage from './background.jpg';

import Profile from './Profile';
import NewsFeed from './NewsFeed';
import Notifications from './Notifications';
import Comments from './Comments';

function App() {

  // const appStyle = {
  //   backgroundImage: 'url("/home/scola/dev/social/src/background.jpg")',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   height: '100vh',
  //   display: 'flex',

  
  return (
    <div className="App" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    }}>
      <h1>Social Media App</h1>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/newsfeed">News Feed</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
            <li>
              <Link to="/comments">Comments</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/newsfeed" element={<NewsFeed />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );

}
export default App;
