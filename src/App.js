import {BrowserRouter,Routes,Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Inventory from "./components/Inventory"
import LeftBar from "./components/LeftBar";
import Order from "./components/Order";
import ReturnsComponent from "./components/ReturnsComponent";

import Shipping from "./components/Shipping";
import CustomerComponent from "./components/CustomerComponent/Index";
import Channel from "./components/Channel";
import Integrations from "./components/Integrations"
import Calculators from "./components/Calculators";
import Reports from "./components/Reports";
import Accounts from "./components/Accounts";

import './App.css';

const App = ()=> (
  <div className="main-bg-container">
    <BrowserRouter>
      <LeftBar/>
        <div className="details-container-bg">
            <Routes>
              <Route path = "/dashboard" element={<Dashboard/>}   />
              <Route path = "/inventory" element = {<Inventory/>} />
              <Route path = "/order" element= {<Order/>}/> 
              <Route path = "/return" element = {<ReturnsComponent/>}/>
              <Route path = "/shipping" element = {<Shipping/>}/> 
              <Route path = "/customer" element = {<CustomerComponent/>}/>
              <Route path = "/channel" element= {<Channel/>}/> 
              <Route path = "/integrations" element={<Integrations/>}/> 
              <Route path = "/calculators" element={<Calculators/>}/> 
              <Route path = "/reports" element = {<Reports/>}/> 
              <Route path = "/account" element ={<Accounts/>}/>
            </Routes>

        </div>
    </BrowserRouter>
  
  </div>
)

export default App;
