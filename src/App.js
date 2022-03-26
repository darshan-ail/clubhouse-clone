import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { Route, Routes } from "react-router-dom";
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';

function App() {
  return (
    <PlanLayout>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route exact path='/invite' element={<PhoneConfirmation />} />
        <Route exact path='/code_confirm' element={<CodeConfirm />} />
      </Routes>
    </PlanLayout>
  );
}

export default App;
