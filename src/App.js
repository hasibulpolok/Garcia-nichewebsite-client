
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Routes/Home/Home/Home';
import Header from './Routes/Shared/Header/Header';
import Footer from './Routes/Shared/Footer.js/Footer';
import Reviews from './Routes/Reviews/Reviews';
import Login from './Routes/Members/Login/Login';
import Register from './Routes/Members/Register/Register';
import Products from './Routes/Home/Products/Products';
import NotFound from './Routes/NotFound/NotFound';

function App() {
  return (
    <div >
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
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
