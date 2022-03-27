import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { Route, Routes } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';

function App() {
  return (
    <PlanLayout>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/invite' element={<PhoneConfirmation />} />
        <Route exact path='/code_confirm' element={<CodeConfirm />} />
        <Route exact path='/allow_notification' element={<AllowNotification />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      {/* <Routes path='/' element={<AppLayout />} >
        <Route path='/home' element={<Home />} />
      </Routes> */}

    </PlanLayout>
  );
}

export default App;
