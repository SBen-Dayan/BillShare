import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function AddParticipant() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('/api/participants/add', {name, email});
        navigate('/participants');
    }
    
    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 w-50" >
                <form onSubmit={onSubmit}>
                    <h2 className="card-title mb-4">Add Participant</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name"
                        value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email (optional)</label>
                        <input type="email" className="form-control" placeholder="Email"
                        value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-primary w-100">Add Participant</button>
                </form>
            </div>
        </div>
    </>
}