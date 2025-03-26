
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProduct';
import SingleProduct from './components/SingleProduct';
import AddBookClub from './components/AddBookClub';
import BookClub from './components/BookClub';
import AboutUs from './components/AboutUs';
import 'bootstrap-icons/font/bootstrap-icons.min.css'




function App() {
  return (
    <Router>
      <div className='App'>
        <h1 className='App-header'>Read More bookclub</h1>
        <Routes>

          <Route path='/signup' element = {<SignUp/>}/>
          <Route path='/signin' element = {<SignIn/>}/>
          <Route path ='/' element = {<GetProducts/>}/>
          <Route path = '/addproducts' element = {<AddProducts/>}/>
          <Route path='/singleproduct' element={<SingleProduct/>}/>
          <Route path='/addbookclub' element={<AddBookClub/>}/>
          <Route path='/getbookclub' element={<BookClub/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
