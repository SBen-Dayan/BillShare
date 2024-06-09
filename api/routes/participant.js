const router = require('express').Router();
const data = require('../data');

router.get('/getAll', async (_, res) => {
    res.json(await data.getParticipants());
})

router.post('/add', async (req, res) => {
    await data.addParticipant(req.body);
    res.json({});
})

module.exports = router;