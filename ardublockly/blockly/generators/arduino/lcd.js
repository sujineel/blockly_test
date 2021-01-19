'use strict';

goog.provide('Blockly.Arduino.lcd');

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
Blockly.Arduino['lcd'] = function(block) {
  var menu = block.getFieldValue('menu');
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var content = block.getFieldValue('content');
  //Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal_I2C.h>');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('lcd', 'LiquidCrystal_I2C lcd('+ menu+', '+'16, 2);');

  //var setupCode = servoName + '.attach(' + pinKey + ');';
  var setupCode = 'lcd.begin();\n'+'  lcd.clear();\n';
  Blockly.Arduino.addSetup('lcd', setupCode, true);

  //var code = dhtName + '.write(' + servoAngle + ');\n';
  var code = 'lcd.setCursor('+ x +','+y+');\n' +
            'lcd.print('+content +');\n';
  return code;
};

Blockly.Arduino['lcd_text'] = function(block) {
  var menu = block.getFieldValue('menu');
  var x = block.getFieldValue('x');
  var y = block.getFieldValue('y');
  var content = block.getFieldValue('content2');

  //Blockly.Arduino.reservePin(block, dhtpin, Blockly.Arduino.PinTypes.dht, 'dhtpin');

  Blockly.Arduino.addInclude('lcd', '#include <LiquidCrystal_I2C.h>');
  //Blockly.Arduino.addDeclaration('servo_' + pinKey, 'Servo ' + servoName + ';');
  Blockly.Arduino.addDeclaration('lcd', 'LiquidCrystal_I2C lcd('+ menu+', '+'16, 2);');

  //var setupCode = servoName + '.attach(' + pinKey + ');';
  var setupCode = 'lcd.begin();\n'+'  lcd.clear();\n';
  Blockly.Arduino.addSetup('lcd', setupCode, true);

  
    var code = 'lcd.setCursor('+ x +','+y+');\n' +
              'lcd.print("'+content +'");\n';
    return code;

  //var code = dhtName + '.write(' + servoAngle + ');\n';

};
