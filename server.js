const SerialPort = require('serialport')
var HID = require('node-hid');
var devices = HID.devices();

devices.map(d=>console.log(d))
