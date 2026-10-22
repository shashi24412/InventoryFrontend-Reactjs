// import './App.css';
import Sinin from './Sinin';
import { Route, Routes } from 'react-router-dom';
import ItemMaster from './InventoryMaster/ItemMaster';
import DepartmentIndent from './InventoryTransaction/DepartmentIndent';
import Store from './InventoryMaster/Store';
import DepartmentApproval from './InventoryTransaction/DepartmentApproval';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import UnauthorizedCompent from './UnauthorizedCompent';
import { Javascript_Dashboard } from './JavascriptCode/Javascript_Dashboard';

function App() {
  return (

    <Routes>

      <Route element={<PrivateRoute />}>
        <Route path="/ItemMaster" element={<ItemMaster />} />
        <Route path="/DepartmentIndent" element={<DepartmentIndent />} />
        <Route path="/Store" element={<Store />} />
        <Route path='/DepartmentApproval' element={<DepartmentApproval />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Route>



      <Route path="/" element={<Sinin />} />
      <Route path="/Unauthorized" element={<UnauthorizedCompent />} />
      <Route path="*" element={<div><h1>No Page found</h1></div>} />
      <Route path="/JSDashboard" element={<Javascript_Dashboard />} />

    </Routes>

  );
}

export default App;
