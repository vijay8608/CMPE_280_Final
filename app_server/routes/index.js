var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

router.use("/", bodyParser.json());
router.use("/", bodyParser.urlencoded());

/*
 * GET home page.
 */
router.get('/', ctrlMain.home);

/*
 * GET home page.
 */
router.get('/home', ctrlMain.home);

// /*
//  * GET dragDrop page.
//  */
// router.get('/dragDrop', ctrlMain.dragDrop);


/*
 * GET feedback page.
 */
router.get('/feedback', ctrlMain.get_feedback);


// router.get('/aboutUs', function(req, res){
//     res.render('aboutUs',{data : 'trrttggdfjsgfikjbh'})
// });

router.get('/aboutUs', ctrlMain.aboutUs);


// /*
//  * GET Amogh's page.
//  */
// router.get('/aboutUs/amogh', ctrlMain.amogh);

// /*
//  * GET Divya's page.
//  */
// router.get('/aboutUs/divya', ctrlMain.divya);


//  * GET Indira's page.
 
// router.get('/aboutUs/indira', ctrlMain.indira);

// /*
//  * GET Vijay's page.
//  */
// router.get('/aboutUs/vijay', ctrlMain.vijay);

/*
 * GET Overdose page.
 */
router.get('/overdose', ctrlMain.overdoseGetAll);

/*
 * GET Overdose page for one state
 */
router.get('/overdose/:id', ctrlMain.overdoseGet);


// get dashboard
router.get('/dashboard', ctrlMain.dashboard);

router.get('/state', ctrlMain.state);

router.get('/stateInfo/:id', ctrlMain.stateInfo); // West Virginia

// router.get('/stateKY', ctrlMain.stateKY); // Kentucky

// router.get('./stateNM', ctrlMain.stateNM); // New Mexico

// router.get('./stateUT', ctrlMain.stateUT); // Utah

// router,get('./stateNV', ctrlMain.stateNV); // Nevada

// router.get('./stateAZ', ctrlMain.stateAZ); // Arizona

// router.get('./stateOH', ctrlMain.stateOH); // Ohio

// router.get('./stateCA', ctrlMain.stateCA); // California

//export this router to use in our index.js
module.exports = router;