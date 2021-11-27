import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';

import Login from './Pages/Login/Login/Login';

import AuthProvider from './contexts/AuthProvider';

import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

import OrderPage from './Pages/OrderPage/OrderPage';
import AddANewService from './Pages/AddANewService/AddANewService';
import ManageService from './Pages/ManageService/ManageService';
import MyOrders from './Pages/MyOrders/MyOrders';
import Register from './Pages/Login/Register/Register';
import AllProducts from './Pages/AllProducts/AllProducts';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import PayNow from './Pages/PayNow/PayNow';
import AdminMaker from './Pages/AdminMaker/AdminMaker';
import Review from './Pages/Review/Review';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>


          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/allProducts">
              <AllProducts></AllProducts>
            </Route>

            <PrivateRoute exact path='/services/:_id'>
              <OrderPage></OrderPage>
            </PrivateRoute>
            <PrivateRoute exact path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path='/paynow'>
              <PayNow></PayNow>
            </PrivateRoute>
            <AdminRoute exact path='/adminmaker'>
              <AdminMaker></AdminMaker>
            </AdminRoute>
            <PrivateRoute exact path='/reviews'>
              <Review></Review>
            </PrivateRoute>


            <AdminRoute exact path='/addService'>
              <AddANewService></AddANewService>
            </AdminRoute>
            <AdminRoute exact path='/products'>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute exact path='/manageService'>
              <ManageService></ManageService>
            </AdminRoute>
            <PrivateRoute exact path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>





            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>


        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
