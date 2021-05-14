import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../src/views/Home/Home';
import CreateProduct from '../src/views/CreateProduct/CreateProduct';
import Register from '../src/views/Register/Register';
import ShowProduct from './views/ShowProduct/ShowProduct';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/create-product' component={CreateProduct}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/show-product' component={ShowProduct}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}


export default App;
