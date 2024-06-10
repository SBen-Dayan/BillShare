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
    const {amount, participantIds} = req.body;
    const billId = await data.addBill(amount, new Date());
    await data.addBillParticipants(participantIds, billId);
    res.json({});
})

module.exports = router;