import axios from "axios"
import { useEffect, useState } from "react"
import { formatDate, formatCurrency } from "../formatters";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BillDetails() {
    const { billId } = useParams();
    const [bill, setBill] = useState(null);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`/api/bills/getBillAndParticipants/${billId}`);
            setBill(data.bill);
            setParticipants(data.participants);
        })();
    }, [])

    return !!bill && <>
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg w-50">
                <div className="card-header bg-dark text-white">
                    <h2 className="card-title text-center mb-0">Bill Details</h2>
                </div>
                <div className="card-body">
                    <p>
                        <strong>Date:</strong> {formatDate(bill.date)}</p>
                    <p><strong>Total Amount:</strong> {formatCurrency(bill.amount)}</p>
                    <h3 className="mt-4">Participants</h3>
                    <ul className="list-group">
                        {participants.map(p => <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                                </svg>
                                {p.name}
                            </span>
                            <span className="badge bg-success rounded-pill">{formatCurrency(bill.amount / participants.length)}</span>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
        <br />
        <div className="row">
            <div className="offset-md-4 col-md-4">
                <Link to="/bills" className="btn btn-dark w-100">Back to Bills</Link>
            </div>
        </div>
    </>
}