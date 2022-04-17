import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { Route, Routes } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from "./pages/Profile"

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/invite' element={<PhoneConfirmation />} />
        <Route exact path='/code_confirm' element={<CodeConfirm />} />
        <Route exact path='/allow_notification' element={<AllowNotification />} />
        <Route path='/home' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        {/* <AppLayout> */}
        <Route path='/profile' element={<Profile />} />
        {/* </AppLayout> */}
      </Routes>
      {/* <Routes path='/' element={<AppLayout />} >
        <Route path='/home' element={<Home />} />
      </Routes> */}

    </AppLayout>
  );
}

export default App;
