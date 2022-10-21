import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GitHubRepos from './component/js/container/GitHubRepos';
import GitHubUsers from './component/js/container/GitHubUsers';

const App = () => {
  return (
    <Routes>
      <Route exact path='/' element={<GitHubUsers />} />
      <Route path='/repo/:userId' element={<GitHubRepos />} />
    </Routes>
  );
};

export default App;