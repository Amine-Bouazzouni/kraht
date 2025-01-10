// import logo from './logo.svg';
import './App.css';
import PatientRecord from './screens/patientRecord';
import Home from './screens/home';
import Signup from './components/LoginSignup/Signup';
import Login from './components/LoginSignup/Login';
import Header from "./components/HeaderPatientTable";
import PatientForm from "./components/PatientForm";
import PatientTable from './components/PatientRecords';
import RendezVous from './screens/RendezVous';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} /> {/* This will render the Home component on the homepage */}
          <Route path="/patient-record" element={<PatientTable />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/patientRecord" element={<PatientRecord />} />
          <Route path="/RendezVous" element={<RendezVous />} />
          
          <Route path="/patients" element={< PatientTable/>} />
          <Route path="/patient-form" element={<PatientForm />} />
          <Route path="/patient-form/:id" element={<PatientForm />} /> {/* For editing an existing patient */}
        
        </Routes>
      </Router>
           
    </div>
  );
}

export default App;
