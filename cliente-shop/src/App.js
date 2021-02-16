
import './assets/css/App.scss';

import HeaderComponent from './components/header/HeaderComponent'
import Breadcrumb from './components/breadcrumb/Breadcrumb'
import ContentComponent from './components/content/ContentComponent'

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Breadcrumb></Breadcrumb>
      <ContentComponent></ContentComponent>

    </div>
  );
}

export default App;
