'use strict';

goog.provide('Blockly.Arduino.sevensegment');

goog.require('Blockly.Arduino');


/**
세븐 세그먼트
 */
Blockly.Arduino['sevensegment'] = function(block) {
  var CLK = block.getFieldValue('CLK');
  var DIO = block.getFieldValue('DIO');

  //Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('sevensegment', '#include <TM1637Display.h>');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('sevensegment_', '#define CLK'+' '+CLK +'\n' +
  '#define DIO'+' '+ DIO+'\n' +
  'TM1637Display dsp'+'('+ CLK +' '+' ,'+ DIO+ ');\n' );

  var code;

  return code;
};

Blockly.Arduino['setbrightness'] = function(block) {
  var bright = block.getFieldValue('bright');

  var code = 'dsp.setBrightness(' + bright+ ');\n';
  return code;

};

Blockly.Arduino['showNumberDec'] = function(block) {
  var number = block.getFieldValue('number');

  var code = 'dsp.showNumberDec(' + number+ ');\n';
  return code;

};
