const sql = require('mssql/msnodesqlv8');

const config = {
    database: 'WebDevPractice3',
    server: '.\\sqlexpress',
    driver: 'msnodesqlv8',
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    }
}

const getBill = async billId => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT * FROM Bills WHERE Id = ${billId}`;
    await sql.close();
    return recordset[0];
}

const getParticipants = async () => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT * FROM Participants`;
    await sql.close();
    return recordset;
}

const getParticipantsForBill = async billId => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT p.* FROM Participants p
        JOIN BillParticipants bp ON bp.ParticipantId = p.Id 
        WHERE bp.BillId = ${billId}`;
    await sql.close();
    return recordset;
}

const getBillsAndParticipantCount = async () => {
    await sql.connect(config);
    const { recordset } = await sql.query`SELECT b.* , COUNT(*) AS 'ParticipantCount' FROM Bills b
        JOIN BillParticipants bp ON bp.BillId = b.Id
        GROUP BY b.Id, b.Amount, b.Date`
    await sql.close();
    return recordset;
}

const addBill = async (amount, date) => {
    await sql.connect(config);
    const { recordset } = await sql.query`INSERT INTO Bills (Amount, Date)
        VALUES (${amount}, ${date}); SELECT SCOPE_IDENTITY() AS 'Id'`;
    await sql.close();
    return recordset[0].Id;
}

const addParticipant = async ({ name, email }) => {
    await sql.connect(config);
    await sql.query`INSERT INTO Participants (Name, Email)
        VALUES (${name}, ${email})`;
    await sql.close();
}

const addBillParticipants = async (participantIds, billId) => {
    const pool = await sql.connect(config);
    const request =  pool.request();
    let query = 'INSERT INTO BillParticipants (ParticipantId, BillId) VALUES';
    
    for (let i = 0, length = participantIds.length; i < length; i++) {
        request.input(`pId${i}`, participantIds[i]);
        request.input(`bId${i}`, billId);
        query += ` (@pId${i}, @bId${i})`;
        if (i < length - 1) {
            query += ',';
        }
    }
    await request.query(query);
    await sql.close();
}

module.exports = {
    getBill,
    getParticipants,
    getParticipantsForBill,
    getBillsAndParticipantCount,
    addBill,
    addParticipant,
    addBillParticipants
};