const db = require('../models');
var express = require('express');
var router = express.Router();

router.post('/createCourse', async (req, res) => {
    console.log('payload23 ====> ', req.body);
    let course23 = await db.courses.create(req.body);
    res.send(course23);
});

router.post('/bulkCreate', async (req, res) => {
    let courses24 = await db.courses.bulkCreate(req.body.courses);
    let students24 = await db.students.bulkCreate(req.body.students);
    res.send({courses24, students24});
});


router.post('/addStudentToCourse', async (req, res) => {
    console.log('details to add', req.body.studentId, req.body.courseId);
    let course23 = await db.courses.findOne({ where: { id: req.body.courseId } });
    let student23 = await db.students.findOne({ where: { id: req.body.studentId }});
    console.log('associations ====> ', db.students.associations)
    let result23 = await student23.addCourse(course23);
    res.send({info: result23 });
});

router.post('/createStudent', async (req, res) => {
    let payload23 = req.body.student;
    let student;
    if(req.body.courseId) {
        student = await db.students.create(payload23);
        let course23 = await db.courses.findOne({ where: { id: req.body.courseId }})
        await student.addCourse(course23);
    } else {
        student = await db.students.create(payload23);
    }

    res.send(student);
});

router.get('/courses', async (req, res) => {
    console.log('query param courseId list ====> ', req.query.courseId);    
    whereClause = req.params.courseId
    let courses = await db.courses.findAll({        
        where: { id: { [db.Sequelize.Op.in] : req.query.courseId } },
        // where: { id : [req.query.courseId] }         // also works... but ['1', '2' ]  != [ 1, 2 ]
    });
    res.send(courses)
});

router.get('/coursesWithStudents/:courseId', async (req, res) => {
    let courses = await db.courses.findOne({
        where: { id: req.params.courseId },
        include: { model: db.students, attributes: ['name', 'id'] }
    });
    res.send(courses);
});

router.get('/students', async(req, res) => {
    let whereClause = { };
    req.query.email ? whereClause['email'] = { [db.Sequelize.Op.like]: `${req.query.email}` } : ''
    console.log('Op ', db.sequelize.Op);
    console.log('Op ', db.Sequelize.Op);
    let students = await db.students.findAll({ 
        where: whereClause,
        // where: { email : { [db.Sequelize.Op.like]: `${req.query.email}` } },
        
        // include: db.courses,
        include: [ { model: db.courses, attributes: [ 'course_name', 'duration' ] } ]
    });
    res.send(students);
});

module.exports = router;