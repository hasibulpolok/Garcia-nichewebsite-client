
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


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/exploreproducts">
           <ExploreProducts></ExploreProducts>
          </Route>
          <PrivateRoute exact path="/detailspurchase/:id">
              <PurchaseDetails></PurchaseDetails>>
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
