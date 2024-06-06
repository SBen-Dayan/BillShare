import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddBill from './pages/AddBill';
import AddParticipant from './pages/AddParticipant';
import Bills from './pages/Bills';
import Participants from './pages/Participants';
import BillDetails from './pages/BillDetails';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add-bill' element={<AddBill />} />
                <Route path='/add-participant' element={<AddParticipant />} />
                <Route path='/bills' element={<Bills />} />
                <Route path='/participants' element={<Participants />} />
                <Route path='/bills/details/:id' element={<BillDetails />} />
            </Routes>
        </Layout>
    );
}

export default App;