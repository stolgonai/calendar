// import {Route, Switch} from 'react-router-dom'
import Calendar from './components/Calendar';
import MainPage from './components/Calendar/MainPage';
import './index.css'


function App() {
  return (
    <div className="App">
      <Calendar />
      <MainPage />

      {/* <Switch>
        <Route path='/calendar' exact>

        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
