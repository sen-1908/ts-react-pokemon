
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { HomeRoute } from './component/router/Home';

function App() {
  return (
   <BrowserRouter>
      <HomeRoute />
   </BrowserRouter>
  );
}

export default App;
