import { Link } from "react-router-dom"

export default function Home() {
    return <>
        <div className="jumbotron bg-light p-5 shadow-lg rounded">
            <h1 className="display-4 text-center">Welcome to BillShare!</h1>
            <p className="lead text-center mt-3">
                Easily split bills with friends and keep track of expenses.
                Get started by adding participants, creating bills, and viewing the details.
            </p>
            <div className="d-flex justify-content-center mt-4">
                <Link className="btn btn-primary mx-2" to="/add-participant">Add Participant</Link>
                <Link className="btn btn-secondary mx-2" to="/participants">List Participants</Link>
                <Link className="btn btn-success mx-2" to="/add-bill">Add Bill</Link>
                <Link className="btn btn-info mx-2" to="/bills">List Bills</Link>
            </div>
        </div>
    </>
}