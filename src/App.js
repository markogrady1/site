import Header from './components/Header';
import Home from './components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Notes from './components/pages/Notes';
// import Post from './components/Post';
import Bookmarks from './components/pages/Bookmarks';

import './App.css';

const routes = [
  { component: Home, path: '/', },
  { component: Projects, path: '/projects', },
  { component: Blog, path: '/blog', },
  // { component: Post, path: '/post/:id', },
  { component: Notes, path: '/notes', },
  { component: Bookmarks, path: '/bookmarks', }
];

function App() {


  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} path={route.path} exact component={route.component} />
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;