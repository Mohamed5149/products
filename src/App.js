import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/header/header'
import Products from './pages/products/products';
import UserForm from './pages/user-form/userForm';
import ReviewOrder from './pages/review-order/reviewOrder';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Switch>
          <Route path="/products" component={Products}></Route>
          <Route path="/user-form" component={UserForm}></Route>
          <Route path="/review-order" component={ReviewOrder}></Route>
          <Route path="**" component={Products}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
