const db = require('../models');
var express = require('express');
var router = express.Router();

router.post('/createEmployee', async (req, res) => {
    let employeeObj = {};
    if(Array.isArray(req.body)) {
        employeeObj = await db.employees.bulkCreate(req.body);
    } else {
        employeeObj = await db.employees.create(req.body);
    }
    res.send(employeeObj);
})

module.exports = router;