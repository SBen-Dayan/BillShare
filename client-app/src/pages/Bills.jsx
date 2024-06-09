import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { formatDate, formatCurrency } from "../formatters";

export default function Bills() {
    const [bills, setBills] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get('/api/bills/getAll');
            setBills(data);
        })();
    }, [])
    return <>
        <div className="text-center">
            <h2>Bills</h2>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Participant Count</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {bills.map(b => <tr key={b.id}>
                    <td>{formatDate(b.date)}</td>
                    <td>{formatCurrency(b.amount)}</td>
                    <td>{b.participantCount}</td>
                    <td>
                        <Link to={`/bills/details/${b.id}`} className="btn btn-info">View Details</Link>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>
}