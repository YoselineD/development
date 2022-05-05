
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListaComponentsDependencias from './components/ListaComponentsDependencias';
import AddUbicacionComponent from './components/AddUbicacionComponent';

function App() {
  return (
    <div >
      
    <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Switch>
            <Route exact path ="/" component ={ListaComponentsDependencias}></Route>
            <Route path ="/Buzon" component ={ListaComponentsDependencias}></Route> 
            <Route path ="/add-Ubicacion" component ={AddUbicacionComponent}></Route>    
            <Route path ="/edit-Ubicacion/:id" component ={AddUbicacionComponent}></Route>       
        </Switch>
      </div>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
