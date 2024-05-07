import '../public/bootstrap-4.4-2.1-dist/css/bootstrap.css';

import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path="/" exact component={Home} />
        <Route path="/resume" component={Resume} />
        {/* Other routes */}
      </MainLayout>
    </Router>
  );
}

export default App;
