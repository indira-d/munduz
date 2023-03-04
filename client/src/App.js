
import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'

import Sidebar from './Pages/Admin/Sidebar';

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Catalogue from './Pages/Catalogue/Catalogue';
import Admin from './Pages/Admin/Products/Admin';
import AllProducts from './Pages/Admin/Products/AllProducts';
import EditProduct from './Pages/Admin/Products/EditProduct';
import AddCategory from './Pages/Admin/Categories/AddCategory';
import AllCategories from './Pages/Admin/Categories/AllCategories';
import AllServices from './Pages/Admin/Services/AllServices';
import AddService from './Pages/Admin/Services/AddService';
import EditService from './Pages/Admin/Services/EditService';
import CategoryList from './Pages/CategoryList/CategoryList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Cart from './Pages/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Sidebar/>} />
            <Route path="/addProduct" element={<Admin/>} />
            <Route path="/allProducts" element={<AllProducts/>} />
            <Route path="/editProduct/:id" element={<EditProduct/>} />
            <Route path="/catalogue" element={<Catalogue/>} />
            <Route path="/addCategory" element={<AddCategory/>} />
            <Route path="/allCategories" element={<AllCategories/>} />
            <Route path="/addService" element={<AddService/>} />
            <Route path="/allServices" element={<AllServices/>} />
            <Route path="/editService/:id" element={<EditService/>} />
            <Route path="/category/:id" element={<CategoryList/>} />
            <Route path="/product/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
       </Routes>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
         />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
