'use strict';

goog.provide('Blockly.Arduino.dht');

goog.require('Blockly.Arduino');


/**
 * Code generator to set an angle (Y) value to a servo PWM pin (X).
 * Arduino code: #include <Servo.h>
 *               Servo myServoX;
 *               setup { myServoX.attach(X); }
 *               loop  { myServoX.write(Y);  }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['dht'] = function(block) {
  var dhtpin = block.getFieldValue('dhtpin');
  var dhtName = 'dht'+ dhtpin;

  Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('dht', '#include "DHT.h"');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('dht_'+ dhtpin, '#define DHTPIN'+ dhtpin+' '+dhtpin +'\n' + '#define DHTTYPE DHT11' +'\n' +
  'DHT dht'+dhtpin+'(DHTPIN'+ dhtpin +' '+', DHTTYPE)' +';');
  //var setupCode = servoName + '.attach(' + pinKey + ');';
  var setupCode = 'dht'+ dhtpin +'.begin();';
  Blockly.Arduino.addSetup('dht_' + dhtpin, setupCode, true);
/*
  float humid = dht.readHumidity();
	float temp = dht.readTemperature();
	int int_humid = (int)humid;
	int int_temp = (int)temp;
*/
  //var code = dhtName + '.write(' + servoAngle + ');\n';
  var code = 'float humid= ' + dhtName + '.readHumidity();\n' +
            'float temp= ' + dhtName + '.readTemperature();\n' +
            'int int_humid = (int)humid;\n'+
            'int int_temp = (int)temp;\n';
  return code;
};
