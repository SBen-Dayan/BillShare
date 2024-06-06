export default function AddBill() {
    return <>
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card shadow p-4 w-50">
                <form>
                    <h2 className="card-title text-center mb-4">Add Bill</h2>
                    <div className="mb-3">
                        <label className="form-label">Total Amount</label>
                        <input type="number" className="form-control" placeholder="Enter total bill amount" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select Participants</label>
                        {/* <div className="form-check"><div>
                        <input className="form-check-input" type="checkbox" value="4">
                            <label className="form-check-label">john doe</label>
                    </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="5">
                                <label className="form-check-label">Mike Johnson</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="6">
                                <label className="form-check-label">Foo Bar</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="7">
                                <label className="form-check-label">Hello World</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="8">
                                <label className="form-check-label">Another Person</label>
                        </div> */}
                    </div>
                    <button className="btn btn-primary w-100 mt-4">Submit</button>
                </form>
            </div>
        </div >
        /</ >
}