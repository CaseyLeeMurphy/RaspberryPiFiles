// ----------------------------------- Show that something is happening --------------------------
// ------------------------------------------------------------------------------------------------
console.log('Loading Server');
const WEB = __dirname.replace('server', 'web');
const exec = require('child_process').exec;
var switch1Stat = 0;
var outlet1Stat = 0;
var outlet2Stat = 0;
var outlet3Stat = 0;
var outlet4Stat = 0;
var outlet5Stat = 0;
var light1Stat = 0;
var light2Stat = 0;
var light3Stat = 0;
var lock1Stat = 0;

// ----------------------------------- Load main modules ------------------------------------------
// ------------------------------------------------------------------------------------------------
var express = require('express');
var fs = require('fs');

// ----------------------------------- Load express middleware modules ----------------------------
// ------------------------------------------------------------------------------------------------
var logger = require('morgan');
var compression = require('compression');
var  bodyParser = require('body-parser');

// ----------------------------------- create express app -----------------------------------------
// ------------------------------------------------------------------------------------------------
var app = express();

// ------------------------------------- Insert Middleware-----------------------------------------
// ------------------------------------------------------------------------------------------------
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ----------------------------------- Initialize All Hardware ------------------------------------
// ------------------------------------------------------------------------------------------------
exec('sudo python lights/off.py');

// ----------------------------------- REST end points --------------------------------------------
// ------------------------------------------------------------------------------------------------

// ---------------------------------------- Get ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
app.get("/api/switchon/1", function(req, res) {
	exec('sudo python lights/on.py');
	switch1Stat = 1;
	res.sendStatus(200);
});

app.get("/api/switchoff/1", function(req, res) {
	exec('sudo python lights/off.py');
	switch1Stat = 0;
	res.sendStatus(200);
});

app.get("/api/switchStatus/1", function(req,res) {
	res.status(200).send(`${switch1Stat}`);
});


// ---------------------------------------- Outlets ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
app.get("/api/outlet/on/1", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070387 -l 198');
	outlet1Stat = 1;
	res.sendStatus(200);
});

app.get("/api/outlet/off/1", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070396 -l 198');
	outlet1Stat = 0;
	res.sendStatus(200);
});

app.get("/api/outlet/status/1", function(req, res) {
	res.status(200).send(`${outlet1Stat}`);
});

app.get("/api/outlet/on/2", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070531 -l 198');
	outlet2Stat = 1;
	res.sendStatus(200);
});

app.get("/api/outlet/off/2", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070540 -l 198');
	outlet2Stat = 0;
	res.sendStatus(200);
});

app.get("/api/outlet/status/2", function(req, res) {
	res.status(200).send(`${outlet2Stat}`);
});

app.get("/api/outlet/on/3", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070851 -l 198');
	outlet3Stat = 1;
	res.sendStatus(200);
});

app.get("/api/outlet/off/3", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1070860 -l 198');
	outlet3Stat = 0;
	res.sendStatus(200);
});

app.get("/api/outlet/status/3", function(req, res) {
	res.status(200).send(`${outlet3Stat}`);
});

app.get("/api/outlet/on/4", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1072387 -l 198');
	outlet4Stat = 1;
	res.sendStatus(200);
});

app.get("/api/outlet/off/4", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1072396 -l 198');
	outlet4Stat = 0;
	res.sendStatus(200);
});

app.get("/api/outlet/status/4", function(req, res) {
	res.status(200).send(`${outlet4Stat}`);
});

app.get("/api/outlet/on/5", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1078531 -l 198');
	outlet5Stat = 1;
	res.sendStatus(200);
});

app.get("/api/outlet/off/5", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 1078540 -l 198');
	outlet5Stat = 0;
	res.sendStatus(200);
});

app.get("/api/outlet/status/5", function(req, res) {
	res.status(200).send(`${outlet5Stat}`);
});

// ---------------------------------------- Lights ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
app.get("/api/light/on/1", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526977 -l 198');
	light1Stat = 1;
	res.sendStatus(200);
});

app.get("/api/light/off/1", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526977 -l 198');
	light1Stat = 0;
	res.sendStatus(200);
});

app.get("/api/light/status/1", function(req, res) {
	res.status(200).send(`${light1Stat}`);
});

app.get("/api/light/on/2", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526833 -l 198');
	light2Stat = 1;
	res.sendStatus(200);
});

app.get("/api/light/off/2", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526833 -l 198');
	light2Stat = 0;
	res.sendStatus(200);
});

app.get("/api/light/status/2", function(req, res) {
	res.status(200).send(`${light2Stat}`);
});

app.get("/api/light/on/3", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526797 -l 198');
	light3Stat = 1;
	res.sendStatus(200);
});

app.get("/api/light/off/3", function(req, res) {
	exec('~/Documents/capstone/outlets/433Utils/RPi_utils/codesend 5526797 -l 198');
	light3Stat = 0;
	res.sendStatus(200);
});

app.get("/api/light/status/3", function(req, res) {
	res.status(200).send(`${light3Stat}`);
});

// ---------------------------------------- Lock ---------------------------------------------------
// ------------------------------------------------------------------------------------------------
app.get("/api/locks/lock/1", function(req, res) {
	exec('python ~/Documents/capstone/stepMotor/clockwise.py');
	lock1Stat = 1;
	res.sendStatus(200);
});

app.get("/api/locks/unlock/1", function(req, res) {
	exec('python ~/Documents/capstone/stepMotor/counterClockwise.py');
	lock1Stat = 0;
	res.sendStatus(200);
});

app.get("/api/lock/status/1", function(req, res) {
	res.status(200).send(`${lock1Stat}`);
});

// ----------------------------------- traditional webserver stuff for serving static files -------
// ------------------------------------------------------------------------------------------------
app.use(express.static(WEB));
app.get('*', function(req, res) {
    res.status(404).sendFile(WEB + '/404Error.html');
});

var server = app.listen(3000);

// ----------------------------------- Gracefullly shutdown ---------------------------------------
// ------------------------------------------------------------------------------------------------
function gracefullShutdown() {
    console.log('\nStarting Shutdown');
    server.close(function() {
        console.log('\nShutdown Complete');
    });
}

process.on('SIGTERM', gracefullShutdown);
process.on('SIGINT', gracefullShutdown);

console.log('Now listening');
