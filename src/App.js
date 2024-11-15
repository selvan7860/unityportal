import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './components/Pages/LoginPage/LoginPage';
import  GlobalStyle  from './components/StyleComponent';

function App() {
  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/auth' exact element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
