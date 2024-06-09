import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { formatCurrency } from "../formatters";

export default function AddBill() {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(0);
    const [participants, setParticipants] = useState([]);
    const [selectedParticipantIds, setSelectedParticipantIds] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('/api/participants/getAll');
            setParticipants(data);
        })();
    }, [])

    const onCheckChange = e => {
        const id = +e.target.value;
        if (selectedParticipantIds.includes(id)) {
            setSelectedParticipantIds(selectedParticipantIds.filter(i => i !== id));
        } else {
            setSelectedParticipantIds([...selectedParticipantIds, id]);
        }
    }

    const onFormSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/bills/addWithParticipants', { amount: +amount, participantIds: selectedParticipantIds });
        navigate('/bills');
    }

    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 w-50">
                <form onSubmit={onFormSubmit}>
                    <h2 className="card-title text-center mb-4">Add Bill</h2>
                    <div className="mb-3">
                        <label className="form-label">Total Amount</label>
                        <input type="number" className="form-control" placeholder="Enter total bill amount"
                            value={amount} onChange={e => setAmount(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select Participants</label>
                        {participants.map(p => <div key={p.id} className="form-check">
                            <input className="form-check-input" type="checkbox"
                                checked={selectedParticipantIds.includes(p.id)}
                                value={p.id} onChange={onCheckChange} />
                            <label className="form-check-label">{p.name}</label>
                        </div>)}
                    </div >
                    {!!selectedParticipantIds.length &&
                        <div className="mt-4">
                            <h3 className="text-center">Split Amounts</h3>
                            <ul className="list-group">
                                {selectedParticipantIds.map(id => <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span>{participants.find(p => p.id === id).name}</span>
                                    <span>{amount ? formatCurrency(amount / selectedParticipantIds.length) : '---'}</span>
                                </li>)}
                            </ul>
                        </div>}
                    <button className="btn btn-primary w-100 mt-4">Submit</button>
                </form>
            </div>
        </div >
    </ >
}