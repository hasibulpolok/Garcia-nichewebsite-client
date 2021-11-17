
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Routes/Home/Home/Home';
import Header from './Routes/Shared/Header/Header';
import Footer from './Routes/Shared/Footer.js/Footer';
import Reviews from './Routes/Reviews/Reviews';
import Login from './Routes/Members/Login/Login';
import Register from './Routes/Members/Register/Register';
import Products from './Routes/Home/Products/Products';
import Dashboard from './Routes/Dashboard/Dashboard/Dashboard';
import NotFound from './Routes/NotFound/NotFound';
import AddProduct from './Routes/Dashboard/AddProduct/AddProduct';
import AllProducts from './Routes/Dashboard/AllProducts/AllProducts';
import MyOrder from './Routes/Dashboard/MyOrders/MyOrders';
import AllOrder from './Routes/Dashboard/AllOrders/AllOrder';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Routes/Members/PrivateRoute/PrivateRoute';
import ExploreProducts from './Routes/Home/ExploreProducts/ExploreProducts';
import PurchaseDetails from './Routes/PurchaseDetails/PurchaseDetails';
import AdminRoute from './Routes/Dashboard/AdminRoute/AdminRoute';
import AllReviews from './Routes/Home/AllReviews/AllReviews';
import Bkash from './Routes/Dashboard/Pay/Bkash';
import Rocket from './Routes/Dashboard/Pay/Rocket';


function App() {
  return (
    <AuthProvider>
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Header/>
            <Home></Home>
          </Route>
          <Route path="/home">
          <Header/>
            <Home></Home>
          </Route>
          <Route path="/login">
          <Header/>
            <Login></Login>
          </Route>
          <Route path="/register">
          <Header/>
            <Register></Register>
          </Route>
          <Route path="/bkash">
          <Header/>
            <Bkash></Bkash>
          </Route>
          <Route path="/rocket">
          <Header/>
            <Rocket/>
          </Route>
          <Route path="/reviews">
          <Header/>
            <AllReviews></AllReviews>
          </Route>
          <Route path="/products">
          <Header/>
            <Products></Products>
          </Route>
          <Route path="/exploreproducts">
          <Header/>
           <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute exact path="/detailspurchase/:id">
          <Header/>
              <PurchaseDetails></PurchaseDetails>
            </PrivateRoute>
          <PrivateRoute path="/dashboard">
           
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addproducts">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/allproducts">
            <AllProducts></AllProducts>
          </Route>
          <PrivateRoute path="/myorders">
          <Header/>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <Route path="/allorders">
            <AllOrder></AllOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
  
  );
}

export default App;
