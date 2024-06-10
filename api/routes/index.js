const router = require('express').Router();
const billRoutes = require('./bills');
const participantRoutes = require('./participants');

router.use('/bills', billRoutes);
router.use('/participants', participantRoutes);

module.exports = router;