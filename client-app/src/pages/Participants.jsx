import { useState, useEffect } from "react";
import axios from "axios";

export default function Participants() {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('/api/participants/getAll');
            setParticipants(data);
        })();
    }, [])
    
    return <>
        <div className="text-center">
            <h2>Participants</h2>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {participants.map(p => <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.email || '-----no email-----'}</td>
                </tr>)}
            </tbody>
        </table>
    </>
}