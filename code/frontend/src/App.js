import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// React Router Import 
import { Switch, Route } from 'react-router-dom'
// Importing Pages
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import NotFoundPage from './components/pages/NotFoundPage';
import ForgotPassword from './components/pages/ForgotPassword'

// Importing Customer Pages
import Home from './components/pages/customer/Home';
import Profile from './components/pages/customer/Profile';
import OrderTracking from './components/pages/customer/OrderTracking'
import SelectDistrict from './components/pages/customer/selectDistrict'
import FlowerDetails from './components/pages/customer/FlowerDetails'
import OrderCreation from './components/pages/customer/OrderCreation'
import Checkout from './components/pages/customer/Checkout'
import OrderDetails from './components/pages/customer/OrderDetails'
import NotificationListCustomer from './components/pages/customer/NotificationListCustomer';

// Importing Seller Pages
import CreateArrangement from './components/pages/seller/CreateArrangement'
import Arrangements from './components/pages/seller/Arrangements'
import ArrangementDetails from './components/pages/seller/ArrangementDetails.js'
import SaleList from './components/pages/seller/SaleList'
import SelectDistrictWorkingHours from './components/pages/seller/SelectDistrictWorkingHours'
import SalePage from './components/pages/seller/SalePage'
import AssignCourier from './components/pages/seller/AssignCourier'
import FlowerStockUpdate from './components/pages/seller/FlowerStockUpdate'
import NotificationListSeller from './components/pages/seller/NotificationListSeller';
import Statistics from './components/pages/seller/Statistics'

// Importing Courier Pages
import selectDistrictCourier from './components/pages/courier/selectDistrictCourier';
import courierDeliveryList from './components/pages/courier/courierDeliveryList';
import deliveryDetails from './components/pages/courier/deliveryDetalis';
import WorkingHoursCourier from './components/pages/courier/WorkingHoursCourier';
import NotificationListCourier from './components/pages/courier/NotificationListCourier';

// Importing Customer Service Pages
import Complaint from './components/pages/service/Complaint';
import ComplaintList from './components/pages/service/ComplaintList';
import NotificationListService from './components/pages/service/NotificationListService';



class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/customer/accountid=:account_id/districtid=:district_id/:search_key?" component={Home} />
          <Route path="/selectDistrict/accountid=:account_id" component={SelectDistrict} />
          <Route path="/flowerdetails/accountid=:account_id/districtid=:district_id/arrangementid=:arrangement_id" component={FlowerDetails} />
          <Route path="/ordercreation/accountid=:account_id/districtid=:district_id/arrangementid=:arrangement_id" component={OrderCreation} />
          <Route path="/checkout/accountid=:account_id/districtid=:district_id/arrangementid=:arrangement_id" component={Checkout} />
          <Route path="/ordertracking/accountid=:account_id" component={OrderTracking} />
          <Route path="/orderdetails/accountid=:account_id/orderid=:order_id" component={OrderDetails} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/profile/" component={Profile} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/createarrangements/accountid=:account_id" component={CreateArrangement} />
          <Route path="/arrangements/accountid=:account_id" component={Arrangements} />   
          <Route path="/arrangement-details/accountid=:account_id/arrangementid=:arrangement_id" component={ArrangementDetails} />   
          <Route path="/stock-update/seller/accountid=:account_id" component={FlowerStockUpdate} /> 
          <Route path="/sale-list/seller/accountid=:account_id" component={SaleList} /> 
          <Route path="/sale-page/accountid=:account_id/orderid=:order_id" component={SalePage} /> 
          <Route path="/statistics/seller/accountid=:account_id" component={Statistics} /> 
          <Route path="/assign-courier/accountid=:account_id/orderid=:order_id" component={AssignCourier} />    
          <Route path="/deliverytracking/accountid=:account_id" component={courierDeliveryList} />   
          <Route path="/deliverydetails/accountid=:account_id/deliveryid=:delivery_id" component={deliveryDetails} />   
          <Route path="/select-district-working-hours/seller/accountid=:account_id" component={SelectDistrictWorkingHours} />   
          <Route path="/select-district-and-working-hours/courier/accountid=:account_id" component={WorkingHoursCourier} />  
          <Route path="/complaint/service/accountid=:account_id/complaintid=:complaint_id/orderid=:order_id" component={Complaint} />
          <Route path="/complaint-list/service/accountid=:account_id" component={ComplaintList} />    
          <Route path="/notification-list/courier/accountid=:account_id" component={NotificationListCourier} />  
          <Route path="/notification-list/customer/accountid=:account_id" component={NotificationListCustomer} />  
          <Route path="/notification-list/seller/accountid=:account_id" component={NotificationListSeller} />  
          <Route path="/notification-list/service/accountid=:account_id" component={NotificationListService} />    
          <Route component={NotFoundPage} />
        </Switch>
        </div>
    );
  }
}
export default App;

