
import './assets/css/App.scss';
import { Provider } from 'react-redux';
import RouterComponente from './RouterComponente'
import store from './Provider/store'

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <RouterComponente></RouterComponente>

      </div>
    </Provider>
  );
}

export default App;
