export default function AddParticipant() {
    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 w-50" >
                <form>
                    <h2 className="card-title mb-4">Add Participant</h2>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email (optional)</label>
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <button className="btn btn-primary w-100">Add Participant</button>
                </form>
            </div>
        </div>
    </>
}