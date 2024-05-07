import '../public/bootstrap-4.4-2.1-dist/css/bootstrap.css';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import MainLayout from './layouts/MainLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path='project' element={<Project />} />
        <Route path='experience' element={<Experience />} />
        */
        <Route path='resume' element={<Resume />} /> }
      </Route>
    )
  );

  return (
      <RouterProvider router={router} />
  );
}

export default App;
