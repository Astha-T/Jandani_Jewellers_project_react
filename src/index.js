import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import $ from 'jquery';
import Popper from 'popper.js';

import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux/es/exports';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './index.css';
import App from './App';
import LoadingSpinner from './Components/LoadingSpinner'
import Store from './Redux/Store';
import SideBar from './Components/SideBaar';

const Signup = React.lazy(() => import('./Pages/SignUp'));
const Switch = React.lazy(() => import('./Pages/Switch'))
const Otp = React.lazy(() => import('./Pages/OTP'));
const Products = React.lazy(() =>  import ('./Pages/Products') )
const CategoryList = React.lazy(()=> import('./Pages/CategoryList'))
const ProductsByCate = React.lazy(()=> import('./Pages/ProductByCategory'))
const FavouriteProducts = React.lazy(() => import('./Pages/FavouriteProducts'));
const PrivacyPolicy1 = React.lazy(() => import('./Pages/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./Pages/Terms&Conditions'));
const UserNotification = React.lazy(() => import('./Pages/UserNotification'));
const ViewProfile = React.lazy(() => import('./Pages/ViewProfile'));
const UpdateProfile = React.lazy(()=> import('./Pages/UpdateProfile'))
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));
const SingleProduct = React.lazy(() => import('./Pages/SingleProduct'))
const SearchProduct = React.lazy(() => import("./Components/SearchProducts"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <BrowserRouter basename='/'>
  <Suspense 
  fallback={
    <div className='centered'>
      <LoadingSpinner />
    </div>}>
  <Routes>
            <Route path="/jandani_jewellers_react" element={<App/>}/>
            <Route path="/jandani_jewellers_react/signup" element={<Signup/>}/>
            <Route path="/jandani_jewellers_react/switch" element={<Switch/>}/>
            <Route path="/jandani_jewellers_react/otp" element={<Otp/>}/>
            <Route path="/jandani_jewellers_react/favourite_products" element={<FavouriteProducts/>}/>
            <Route path="/jandani_jewellers_react/privacy_policy" element={<PrivacyPolicy1/>}/>
            <Route path="/jandani_jewellers_react/terms_and_conditions" element={<TermsConditions/>}/>
            <Route path="/jandani_jewellers_react/notifications" element={<UserNotification/>}/>
            <Route path="/jandani_jewellers_react/view_profile" element={<ViewProfile/>}/>
            <Route path="/jandani_jewellers_react/updateProfile" element={<UpdateProfile/>}/>
            <Route path="/jandani_jewellers_react/aboutus" element={<AboutUs/>}/>
            <Route path="/jandani_jewellers_react/category_list" element={<CategoryList/>}/>
            <Route path="/jandani_jewellers_react/product_list" element={<Products/>}/>
            <Route path="/jandani_jewellers_react/productbycate_list" element={<ProductsByCate/>}/>
            <Route path="/jandani_jewellers_react/singleProduct" element={<SingleProduct/>}/>
            <Route path="/jandani_jewellers_react/searchproduct" element={<SearchProduct/>}/>
        </Routes>
  </Suspense>
  </BrowserRouter>
  </Provider>
);
  



