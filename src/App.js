import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastUtils, Navbar, Loader, Footer } from './components';
import { EventDetails, RegistrationsForms, Payment, Admin, InCTeams, Homepage, Auth } from './pages';
import Test from './test/test.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes';
import './App.css';

// const Test = lazy(() => import('./test/test.jsx'))

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <ToastUtils />
      <Navbar />
      {loading ? <Loader /> : <></>}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/event-details/:eventName' element={<EventDetails />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/register/*' element={<RegistrationsForms />} />
        <Route path='/payment/:id' element={<Payment />} />
        <Route path='/admin/*' element={<ProtectedRoutes children={<Admin />} />} />
        <Route path='/inc-teams' element={<InCTeams />} />
        {process.env.REACT_APP_ENVIRONMENT === 'development' &&
          <Route path='/test' element={
            <Suspense fallback={<>...</>}>
              <Test />
            </Suspense>
          } />
        }
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;