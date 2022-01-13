
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Studioman from './components/studioman/studioman';
import Studios from './components/studioman/studios/studios';
import Times from './components/studioman/times/times';
import Schedule from './components/studioman/schcedul/schcedule';
import Transaction from './components/studioman/transaction/transaction';
import Support from './components/studioman/support/support';
import Myprofile from './components/studioman/myprofile/myprofile';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Studioman child={<Studios tabstyle = {1}/>}/> }/>
        <Route path="/studios" element={<Studioman child={<Studios/>}/> }/>
        <Route path="/times" element={<Studioman child={<Times/>}/> }/>
        <Route path="/schcedule" element={<Studioman child={<Schedule/>} /> }/>
        <Route path="/transaction" element={<Studioman child={<Transaction/>} /> }/>
        <Route path="/myprofile" element={<Studioman child={<Myprofile/>} /> }/>
        <Route path="/support" element={<Studioman child={<Support/>} /> }/>
      </Routes>
      
    </div>
  );
}

export default App;
