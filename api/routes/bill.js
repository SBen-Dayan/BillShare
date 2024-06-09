const router = require('express').Router();
const data = require('../data');

router.get('/getAll', async (_, res) => {
    res.json(await data.getBillsAndParticipantCount());
})

router.get('/getBillAndParticipants/:billId', async (req, res) => {
    const bill = await data.getBill(req.params.billId);
    const participants = await data.getParticipantsForBill(req.params.billId);
    res.json({bill, participants});
})

router.post('/addWithParticipants', async (req, res) => {
    const billId = await data.addBill(req.body.amount, new Date());
    await data.addBillParticipants(billId, req.body.participantIds);
    res.json({});
})

module.exports = router;