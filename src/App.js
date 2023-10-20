import {AuthProvider} from './components/auth';
import Home from './components/Home';

import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import Feature from './components/Feature';
import New from './components/New';
import User from './components/User';
import NoMatch from './components/NoMatch';
import UserDetails from './components/UserDetails';
import Login  from './components/Login';
import Profile from './components/Profile';
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {RequireAuth} from './components/RequireAuth';
import { Suspense, lazy } from 'react';

const LazyAbout = lazy(()=> import ('./components/About'));

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' exact  Component={Home}></Route>
        <Route path='about' element={
          <Suspense fallback={<p> Loading...</p>}>
            <LazyAbout /> 
          </Suspense>
        } />
        <Route path='order-summary' exact Component={OrderSummary}></Route>
        <Route path='products' exact Component={Product}>
          <Route index Component={New} />                           {/* it is subitem to index */}
          <Route path='features' exact Component={Feature} />
          <Route path='new' exact Component={New} />
        </Route>
        <Route path='users' exact Component={User}>
          <Route  path=':id' Component={UserDetails}></Route>
        </Route>
        <Route path='profile' element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        } />

        <Route path='login' Component={Login} />

        <Route path='*' exact Component={NoMatch}></Route>
    
      </Routes>
    </AuthProvider>
  
    
  );
}

export default App;
