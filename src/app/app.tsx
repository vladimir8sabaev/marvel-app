import AppHeader from '../components/appHeader/AppHeader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './../components/pages/MainPage';
import ComicsPage from './../components/pages/ComicsPage';
import Page404 from './../components/pages/404';
import SingleComicPage from './../components/pages/SingleComicPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" Component={MainPage} />
            <Route path="/comics" Component={ComicsPage} />
            <Route path="/comics/:comicId" Component={SingleComicPage} />
            <Route path="*" Component={Page404} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
