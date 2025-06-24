import { Routes, Route } from 'react-router-dom';
import Landing from './landingPage';
import Login from './loginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landingPage" element={<Landing />} /> 
    </Routes>
  );
}

export default App;